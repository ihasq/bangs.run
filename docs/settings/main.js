import { $, h as html, on, css } from "https://esm.sh/libh";

export default () => {

	const
		searchQuery = $(""),
		isBangValid = searchQuery.match(/\s/).into($ => !!$).or(searchQuery.length.into($ => $ == 0)),
		resultQuery = searchQuery.into($ => localStorage.getItem(`/token/${$}`) || ""),
		resultEdit = resultQuery.into($ => $),
		hasChange = resultEdit.into($ => resultQuery.$ !== $)
	;

	return html`

		<h1>Settings</h1>
		
		<label>Search Bangs: <input ${{
			[css.padding]: "4px",
			type: "text",
			value: searchQuery,
			autofocus: true
		}}></label><br>

		<input ${{
			value: resultEdit,
			placeholder: "Not found",
			[css]: {
				padding: "4px",
				width: "50%"
			}
		}}>
		<button ${{
			disabled: isBangValid.and(hasChange),
			[css.padding]: "4px",
			[on.click]() {
				localStorage.setItem(`/token/${searchQuery.$}`, resultEdit.$)
			}
		}}>
			${resultQuery.into($ => $ == "" ? "create" : "save")}
		</button>

		<button ${{
			disabled: resultQuery.into($ => $ == ""),
			[css.padding]: "4px",
			[on.click]() {
				localStorage.setItem(`/token/${searchQuery.$}`, "")
				resultQuery.$ = "";
			}
		}}>
			reset
		</button>

	`;
}
// $(localStorage).getItem($`/token/${searchQuery}`).suspense("Not found")
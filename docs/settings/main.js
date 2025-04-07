import { $, h as html, on } from "https://esm.sh/libh";

export default () => {

	const
		index = $(0),
		list = ["a", "b", "c", "d", "e"],
		page = index.into(x => list[x % list.length]),

		searchQuery = $("")
	;

	searchQuery.watch(query => {

	});

	return html`
		<h1>Settings</h1>
		<h2>Search bangs</h2>
		<input ${{ type: "text", value: searchQuery }}>
		${html`<label>ok${searchQuery}lob</label>`}
		<button ${{ [on.click]: () => index.$++ }}>+</button>
		<button ${{ [on.click]: () => index.$-- }}>-</button>
	`;
}
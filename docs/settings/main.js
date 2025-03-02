import { $, h as html, on } from "https://libh.dev";

function Main() {

	const
		index = $(0),
		list = ["a", "b", "c", "d", "e"],
		page = index.into(x => list.at(x % list.length))
	;

	return html`
		<h1>Settings: ${page}</h1>
		<button ${{ [on.click]: () => index.$++ }}>+</button>
		<button ${{ [on.click]: () => index.$-- }}>-</button>
	`;
}

document.body.append(...Main())
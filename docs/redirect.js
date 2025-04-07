if(!localStorage.getItem('/var/hasItem')) {
	await fetch("./bangs.json").then(res => res.json()).then(json => json.forEach(([p, q]) => localStorage.setItem(`/token/${p}`, q)))
	localStorage.setItem('/var/hasItem', Date.now())
}
const [p, ...q] = location.hash.slice(1).split(/%20+/);
location.href = location.hash ? localStorage.getItem(`/token/${p}`)?.replace?.("{{{s}}}", q.join(" ")) || "/about" : "/about"
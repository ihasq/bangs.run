if(localStorage.getItem('/var/hasItem')) {
	const [p, ...q] = location.hash.slice(1).split(/%20+/);
	location.href = location.hash ? localStorage.getItem(`/token/${p}`)?.replace?.("\0", q.join(" ")) || "/about" : "/about"
}
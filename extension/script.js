// wishlist: hAudio or RDFa markup

var nodes = document.querySelectorAll(".release");

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var artist = node.querySelectorAll(".artist_name a").item(0).textContent;
	var title = node.querySelectorAll(".title a").item(0).textContent;

	var link = document.createElement("a");
	link.href = "tomahawk://view/album?artist=" + encodeURIComponent(artist) + "&name=" + encodeURIComponent(title);
	link.innerHTML = "▶ Tomahawk";
	link.style.backgroundImage = "url(http://www.tomahawk-player.org/sites/default/files/favicon.ico)";

	var li = document.createElement("li");
	li.setAttribute("class", "recommender");
	li.appendChild(link);

	node.parentNode.querySelectorAll("ul.recommenders").item(0).appendChild(li);
}
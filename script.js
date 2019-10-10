const getComic = async id => {
	//Generate a random number that will be the comic number
	let randomComicId = Math.floor(Math.random() * 2213) + 1;
	//get the comic data from the xkcd api and parse it into json
	const res = await fetch(
		`https://cors-anywhere.herokuapp.com/https://xkcd.com/${randomComicId}/info.0.json`
	);
	const data = await res.json();
	//make img, title and container and add it into your html
	let $comic = $('<img>', { src: data.img, alt: data.alt });
	let $title = $('<h4>')
		.append($('<a>', { href: `https://xkcd.com/${randomComicId}/` }))
		.text(data.safe_title);
	let $comicContainer = $('<div>', { class: 'comic-container' })
		.append($title)
		.append($comic);
	$('.img-container').append($comicContainer);
};

$(document).ready(() => {
	getComic();
	setInterval(() => {
		getComic();
	}, 5000);
});

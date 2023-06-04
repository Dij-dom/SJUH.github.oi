// Load photos from a JSON file
fetch('photos.json')
	.then(response => response.json())
	.then(data => {
		const gallery = document.querySelector('.gallery_main');

		data.forEach(photo => {
			const img = document.createElement('img');
			img.src = photo.url;
			img.alt = photo.alt;
			gallery.appendChild(img);
		});
	})
	.catch(error => console.error(error));

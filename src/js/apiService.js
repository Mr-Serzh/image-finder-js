export default async (name, page) => {
	try {
		const picturesList = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=19173841-1948c6c8698f2c876b72e0f5c`);
		return picturesList.json();
	} catch (error) {
		return error;
	}
}
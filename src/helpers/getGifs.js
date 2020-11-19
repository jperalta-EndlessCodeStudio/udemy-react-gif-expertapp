export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BmYgkBkZil8dQecahIKV91KzNer53BEM`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            content: gif.images.downsized_medium.url,
        }
    });

    return gifs;
}
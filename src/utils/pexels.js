const BASE = "https://api.pexels.com/v1";

export async function getPexelsHero(query = "food") {
    const key = process.env.REACT_APP_PEXELS_KEY;
    if (!key) throw new Error("Missing REACT_APP_PEXELS_KEY");

    const url = `${BASE}/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
    const res = await fetch(url, { headers: { Authorization: key } });
    if (!res.ok) throw new Error("Pexels API error");
    const data = await res.json();

    const photo = data.photos?.[0];
    if (!photo) return null;

    return {
        src: photo.src?.landscape || photo.src?.large,
        alt: photo.alt || query,
        author: photo.photographer,
        authorUrl: photo.photographer_url,
    };
}

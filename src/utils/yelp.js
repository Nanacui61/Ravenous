// const API_KEY = "xUV9e-46iqnkW36ZfPYW7EpdK8llxkh0l8bC9v8X9FB-gp9ogWWllH8ML84Zf4IpzcJ6Ak7IUMCD_lAyjuudbxQz7w0xaqnYZj_JhCNPV-tbH5ckEyNMUtlM8VumaHYx";
const API_BASE = "https://api.yelp.com/v3";
const searchEndpoint = "/businesses/search";

export const yelp = async (term, location, sortBy = "best_match") => {
    // Enable only if you’ve requested demo access here:
    // https://cors-anywhere.herokuapp.com/corsdemo
    // const corsOverride = "https://cors-anywhere.herokuapp.com/";

    // Use URLSearchParams to ensure proper encoding
    const params = new URLSearchParams({
        term: term || "",
        location: location || "",
        sort_by: sortBy || "best_match",
        limit: "18",
    });

    const urlToFetch = `${API_BASE}${searchEndpoint}?${params.toString()}`;

    try {
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'Bearer DwBM4AiSSKn2nCjWkobAw4_cnUZe56Q3wxe5yiOmAPXiJ54LVmpRg4VxA0uph5zOPzNP_3UcZN8mbPqTd_sHAn25wN5XOm1cIOev363dR4p81GVydfX4vLvjlEHxaHYx\n' +
                    '\n' +
                    '\n'
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse.businesses.map((b) => ({
                id: b.id,
                imageSrc: b.image_url,
                name: b.name,
                address: b.location?.address1 || "",
                city: b.location?.city || "",
                state: b.location?.state || "",
                zipCode: b.location?.zip_code || "",
                category: b.categories?.[0]?.title || "",
                rating: b.rating,
                reviewCount: b.review_count,
                url: b.url,
            }))
        }
    } catch {
        console.log("catch error");
    }
}



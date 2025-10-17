const BASE = 'https://api.openweathermap.org/data/2.5/weather';

export async function getCityWeather(city) {
    const key = process.env.REACT_APP_OPENWEATHER_KEY;
    if (!key) throw new Error('Missing REACT_APP_OPENWEATHER_KEY');

    const url = `${BASE}?q=${encodeURIComponent(city)}&units=metric&appid=${key}`;
    const res = await fetch(url);
    if (!res.ok) {
        const msg = await res.text().catch(()=>'');
        throw new Error(`Weather API error: ${res.status} ${msg}`);
    }
    const data = await res.json();

    return {
        name: data.name,
        temp: Math.round(data.main?.temp),
        feelsLike: Math.round(data.main?.feels_like),
        desc: data.weather?.[0]?.description ?? '',
        icon: data.weather?.[0]?.icon ?? '01d',
    };
}

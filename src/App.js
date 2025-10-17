import './App.css';
import { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Stack, Box } from "@mui/material";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import WeatherBanner from "./components/WeatherBanner";
import { yelp } from "./utils/yelp";
import { getCityWeather } from "./utils/weather";
import { getPexelsHero } from "./utils/pexels";

function App() {
    const [businesses, setBusinesses] = useState([]);
    const [weather, setWeather] = useState(null);
    const [background, setBackground] = useState(null);

    const handleSearch = async (term, location, sortBy) => {
        try {
            // Yelp search
            const results = await yelp(term, location, sortBy);
            setBusinesses(results);

            // Weather search (independent)
            getCityWeather(location)
                .then(setWeather)
                .catch(() => setWeather(null));
        } catch (error) {
            console.error("Search failed:", error);
            setWeather(null);
        }
            // background search
            getPexelsHero(term || "food")
                .then(setBackground)
                .catch(() => setBackground(null));
    };

    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                backgroundImage: background ? `url(${background.src})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                transition: "background-image 1.2s ease-in-out",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.55)",
                    zIndex: 0,
                },
            }}
        >
            {/* Top Bar */}
            <AppBar position="sticky" color="default" elevation={1} sx={{ zIndex: 2 }}>
                <Toolbar>
                    <Typography variant="h6" fontWeight={700}>
                        Ravenous
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ py: 3, position: "relative", zIndex: 1 }}>
                <Stack spacing={2}>
                    {/* Search */}
                    <Box>
                        <SearchBar onSearch={handleSearch} />
                    </Box>

                    {/* Weather Info */}
                    <Box>
                        <WeatherBanner weather={weather} />
                    </Box>

                    {/* Results */}
                    <Box>
                        <BusinessList businesses={businesses} />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
export default App;

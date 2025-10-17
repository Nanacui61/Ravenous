import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

export default function WeatherBanner({ weather }) {
    if (!weather) return null;

    const { name, temp, feelsLike, desc, icon } = weather;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <Card sx={{ mt: 2, mb: 1 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img src={iconUrl} alt={desc} width={56} height={56} loading="lazy" />
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">{name} Current Weather</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textTransform: "capitalize" }}
                    >
                        {desc}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Chip label={`${temp}°C`} />
                    <Typography variant="body2">Feels like {feelsLike}°C</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

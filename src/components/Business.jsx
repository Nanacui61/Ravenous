import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export default function Business({ business }) {
    const handleCardClick = () => {
        if (business.url) {
            window.open(business.url, "_blank"); // opens Yelp link in new tab
        }
    };

    return (
        <Card
            onClick={handleCardClick}
            sx={{
                borderRadius: 3,
                boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
                    cursor: "pointer",
                },
                background: "rgba(40, 40, 40, 0.6)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                height: "100%",
                minHeight: 380,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "white",
            }}
        >
            {/* Image Section */}
            <CardMedia
                component="img"
                image={business.imageSrc || "/placeholder.jpg"}
                alt={business.name}
                sx={{
                    height: 160,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}
            />

            {/* Text Section */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: "white" }}>
                    {business.name}
                </Typography>

                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
                    {business.address}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
                    {business.city}, {business.state} {business.zipCode}
                </Typography>

                <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                        {business.category}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                        ⭐ {business.rating} stars • {business.reviewCount} reviews
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

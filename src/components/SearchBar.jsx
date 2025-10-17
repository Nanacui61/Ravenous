import React, {useState} from "react";
import {TextField, Button} from "@mui/material";

const SortByOptions = {
    'Best Matching': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',

}

export default function SearchBar({onSearch}) {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");




    const SortingOptions = () => {
        return Object.keys(SortByOptions).map((label) => {
            const value = SortByOptions[label];
            const active =value===sortBy;
            return (
                <Button
                    key={label}
                    onClick={() => setSortBy(value)}
                    style={{

                        background: active ? "#111827" : "#f7f7f7",
                        color: active ? "#fff" : "#333",
                    }}
                >
                    {label}
                </Button>
            );
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Use event.preventDefault() to prevent the default action of clicking the button.
        if (onSearch) {
            onSearch(term, location, sortBy);
        }

    }
    return (
        <>
            <div>
                <ul>{SortingOptions()}</ul>
            </div>

            <form onSubmit={handleSubmit}>


                <TextField size="small"
                           type="text"
                           placeholder="Search by name..."
                           value={term}
                           onChange={(e) => setTerm(e.target.value)}
                           sx={{
                               input: {
                                   color: "white",
                                   "&::placeholder": {
                                       color: "rgba(255,255,255,0.9)",
                                       opacity: 1,
                                   }
                               }
                    }}
                />
                <TextField size="small"
                           type ="text"
                           placeholder="Where?"
                           value={location}
                           onChange={(e) => setLocation(e.target.value)}
                           sx={{
                               input: {
                                   color: "white",
                                   "&::placeholder": {
                                       color: "rgba(255,255,255,0.9)",
                                       opacity: 1,
                                   }
                               }
                           }}/>
                <Button type="submit" variant="contained">Search</Button>

            </form>

        </>
    )
}






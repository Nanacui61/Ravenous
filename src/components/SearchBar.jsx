import React, {useState} from "react";
import business from "./Business";

const SortByOptions = {
    'Best Matching': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',

}

export default function SearchBar({onSearch}) {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("");

    const SortingOptions = () => {
        return Object.keys(SortByOptions).map((label) => {
            const value = SortByOptions[label];
            return (
                <div
                    key={label}
                    onClick={() => setSortBy(label)}>
                    {value}
                </div>
            );
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (onSearch) {
            onSearch({ term, location, sortBy });
        }

    }
    return (
        <>
            <div>
                <ul>{SortingOptions()}</ul>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}/>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}/>
                <button type="submit">Search</button>

            </form>

        </>
    )
}






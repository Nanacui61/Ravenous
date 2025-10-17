import React from "react";
import Business from "../components/Business";

import {Grid} from "@mui/material";

export default function BusinessList({businesses = []}) {

    return (
        <Grid container spacing={1.5}>

            {businesses.map((business) => (
                <Grid item key={business.id} xs={12}   // 1 col on phones
                      sm={6}    // 2 cols
                      md={4}    // 3 cols
                      lg={3}    // 4 cols
                      xl={2.4}  // 5 cols (MUI supports decimals)
                    >
                    <Business key={business.id} business={business}/>

                </Grid>
            ))}
        </Grid>
    );
}

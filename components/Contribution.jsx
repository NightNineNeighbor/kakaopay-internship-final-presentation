import React, { useEffect } from "react";
import GitHubCalendar from "../lib/github-calendar";

const Contribution = () => {
    useEffect(() => {
        GitHubCalendar(".github-container", "anne-higher");
    });
    return (
        <>
            <link
                rel="stylesheet"
                href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
            />
            <div className="github-container" />
        </>
    );
};

export default Contribution;

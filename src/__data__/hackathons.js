import {URLs} from "./URLs";

import viant from "./../images/hackathons/viant.ico"

export const hackathons = [
    {
        name: "Naimix: Code (2024)",
        path: URLs.naimix,
        id: "naimix",
        link: "https://viantfrontend.vercel.app/",
        video: "https://youtu.be/IF8dSadivCY",
        git: "https://github.com/innoviant"
    }
]

export const getHackathonExtra = (projectId, t) => {
    const descriptions = {
        naimix: {
            short: t('hackathons.naimix.short'),
            body: t('hackathons.naimix.body'),
            history: t('hackathons.naimix.history'),
            ps: t('hackathons.naimix.ps'),
            favicon: viant
        }
    }

    const empty = {
        short: "",
        body: "",
        history: "",
        ps: "",
        favicon: null
    }

    if (!projectId || !(Object.keys(descriptions).includes(projectId))) {
        return empty;
    }

    return descriptions[projectId];
}

import {URLs} from "./URLs";

import viant from "./../images/hackathons/viant.ico"
import yandexfrontend from "./../images/hackathons/yandexfrontend.svg"

export const hackathons = [
    {
        name: "Naimix: Code (2024)",
        path: URLs.naimix,
        id: "naimix",
        link: "https://viantfrontend.vercel.app/",
        video: "https://youtu.be/IF8dSadivCY",
        git: "https://github.com/innoviant"
    },
    {
        name: "Я 💛 Фронтенд (2025)",
        path: URLs.yandexfrontend,
        id: "yandexfrontend"
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
        },
        yandexfrontend: {
            short: t('hackathons.yandexfrontend.short'),
            body: t('hackathons.yandexfrontend.body'),
            history: t('hackathons.yandexfrontend.history'),
            ps: t('hackathons.yandexfrontend.ps'),
            favicon: yandexfrontend
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

import {URLs} from "./URLs";

import viant from "./../images/hackathons/viant.ico"
import yandexfrontend from "./../images/hackathons/yandexfrontend.svg"
import y_y from "./../images/hackathons/y_y.svg"
import purple_logo from "./../images/hackathons/purple_logo.png"
import merge_logo from "./../images/hackathons/merge_logo.png"

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
        name: "Purple Hack (2025)",
        path: URLs.purplehack,
        id: "purplehack",
        video: "https://www.youtube.com/watch?v=v5AuYZuOlBU"
    },
    {
        name: "Я 💛 Фронтенд (2025)",
        path: URLs.yandexfrontend,
        id: "yandexfrontend"
    },
    {
        name: "Young&&Yandex (2025)",
        path: URLs.youngyandex,
        id: "youngyandex"
    },
    {
        name: "Merge conference",
        path: URLs.merge,
        id: "merge"
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
        },
        purplehack: {
            short: t('hackathons.purplehack.short'),
            body: t('hackathons.purplehack.body'),
            history: t('hackathons.purplehack.history'),
            ps: t('hackathons.purplehack.ps'),
            favicon: purple_logo
        },
        youngyandex: {
            short: t('hackathons.youngyandex.short'),
            body: t('hackathons.youngyandex.body'),
            history: t('hackathons.youngyandex.history'),
            ps: t('hackathons.youngyandex.ps'),
            favicon: y_y
        },
        merge: {
            short: t('hackathons.merge.short'),
            body: t('hackathons.merge.body'),
            history: t('hackathons.merge.history'),
            ps: t('hackathons.merge.ps'),
            favicon: merge_logo
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

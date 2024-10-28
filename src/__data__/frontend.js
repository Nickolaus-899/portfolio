import {URLs} from "./URLs";

import enterfront from "./../images/frontend/enterfront.svg";
import fwd from "./../images/frontend/fwd.ico";
import textyle from "./../images/frontend/textyle.ico";
import booking from "./../images/frontend/booking.svg";

export const frontend_projects = [
    {
        name: "Enterfront",
        path: URLs.enterfront,
        id: 'enterfront',
        link: "https://dev.bro-js.ru/enterfront/",
        video: "",
        git: "https://git.bro-js.ru/enterfront/front"
    },
    {
        name: "Textyle",
        path: URLs.textyle,
        id: 'textyle',
        link: "https://textyle.vercel.app/",
        video: "https://www.youtube.com/watch?v=73sS-C4M1Pw&t=4s",
        git: "https://github.com/Nickolaus-899/Textyle-Frontend"
    },
    {
        name: "InnoFood",
        path: URLs.fwd,
        id: 'fwd',
        link: "https://fwd-react.vercel.app/",
        video: "https://youtu.be/a5Jian4Afsk",
        git: "https://github.com/Nickolaus-899/fwd_react"
    },
    {
        name: "InnoBooking bot",
        path: URLs.booking,
        id: 'booking',
        link: "",
        video: "https://youtu.be/CgztJYxvnhU",
        git: "https://gitlab.pg.innopolis.university/a.savchenko/innobookingbotfrontend"
    }
]

export const getFrontEndExtra = (projectId, t) => {
    const descriptions = {
        "enterfront": {
            short: t('projects.enterfront.short'),
            body: t('projects.enterfront.body'),
            history: t('projects.enterfront.history'),
            ps: t('projects.enterfront.ps'),
            favicon: enterfront
        },
        "textyle": {
            short: t('projects.textyle.short'),
            body: t('projects.textyle.body'),
            history: t('projects.textyle.history'),
            ps: t('projects.textyle.ps'),
            favicon: textyle
        },
        "fwd": {
            short: t('projects.fwd.short'),
            body: t('projects.fwd.body'),
            history: t('projects.fwd.history'),
            ps: t('projects.fwd.ps'),
            favicon: fwd
        },
        "booking": {
            short: t('projects.booking.short'),
            body: t('projects.booking.body'),
            history: t('projects.booking.history'),
            ps: t('projects.booking.ps'),
            favicon: booking
        }
    };

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


import {URLs} from "./URLs";

import c from "./../images/backend/c.png";
import python from "./../images/backend/python.svg";
import verilog from "./../images/backend/verilog.svg";


export const backend_projects = [
    {
        name: "Encoding System",
        path: URLs.sna,
        id: "sna",
        link: "",
        video: "https://youtu.be/k_iecYOyZIU"
    },
    {
        name: "Memory Game",
        path: URLs.verilog,
        id: 'verilog',
        link: "",
        video: ""
    },
    {
        name: "Enigma",
        path: URLs.enigma,
        id: 'enigma',
        link: "",
        video: ""
    },
    {
        name: "Mini-game at cmd",
        path: URLs.game,
        id: 'game',
        link: "",
        video: ""
    },
    {
        name: "MiTe School",
        path: URLs.school,
        id: 'school',
        link: "",
        video: ""
    }
]

export const getBackEndExtra = (projectId, t) => {
    const descriptions = {
        sna: {
            short: t('projects.sna.short'),
            body: t('projects.sna.body'),
            history: t('projects.sna.history'),
            ps: t('projects.sna.ps'),
            favicon: python
        },
        verilog: {
            short: t('projects.verilog.short'),
            body: t('projects.verilog.body'),
            history: t('projects.verilog.history'),
            ps: t('projects.verilog.ps'),
            favicon: verilog
        },
        enigma: {
            short: t('projects.enigma.short'),
            body: t('projects.enigma.body'),
            history: t('projects.enigma.history'),
            ps: t('projects.enigma.ps'),
            favicon: c
        },
        game: {
            short: t('projects.game.short'),
            body: t('projects.game.body'),
            history: t('projects.game.history'),
            ps: t('projects.game.ps'),
            favicon: python
        },
        school: {
            short: t('projects.school.short'),
            body: t('projects.school.body'),
            history: t('projects.school.history'),
            ps: t('projects.school.ps'),
            favicon: python
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
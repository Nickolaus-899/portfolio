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
        video: "https://youtu.be/k_iecYOyZIU",
        git: "https://gitlab.pg.innopolis.university/sna_project/id_api"
    },
    {
        name: "Memory Game",
        path: URLs.verilog,
        id: 'verilog',
        link: "",
        video: "https://www.youtube.com/watch?v=QAkkXCagOs0",
        git: "https://github.com/Nickolaus-899/FPGA-project-by-Marakuja"
    },
    {
        name: "Compiler for I language",
        path: URLs.compiler,
        id: 'compiler',
        link: "",
        video: "",
        git: "https://github.com/Tarsonis-team/Tarsonis-Compiler"
    },
    {
        name: "Enigma",
        path: URLs.enigma,
        id: 'enigma',
        link: "",
        video: "https://youtu.be/FkCvo4SNY10",
        git: "https://github.com/Nickolaus-899/Enigma"
    },
    {
        name: "Mini-game at cmd",
        path: URLs.game,
        id: 'game',
        link: "",
        video: "https://youtu.be/FhSFZ4s1G14",
        git: "https://github.com/Nickolaus-899/mini_game"
    },
    {
        name: "MiTe School",
        path: URLs.school,
        id: 'school',
        link: "",
        video: "",
        git: "https://github.com/Nickolaus-899/MiTe_School"
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
        },
        compiler: {
            short: t('projects.compiler.short'),
            body: t('projects.compiler.body'),
            history: t('projects.compiler.history'),
            ps: t('projects.compiler.ps'),
            favicon: c
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
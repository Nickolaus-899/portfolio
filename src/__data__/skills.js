export const languages = (t) => [
    {
        id: 'de',
        knowledge: "B2 (Goethe)",
        description: t('de-description')
    },
    {
        id: 'en',
        knowledge: "C1 (IELTS)",
        description: t('en-description')
    },
    {
        id: 'ru',
        knowledge: t('native'),
        description: t('ru-description')
    }
];

export const educations = (t) => [
    {
        name: t('inno-uni.name'),
        duration: t('inno-uni.duration'),
        field: t('inno-uni.field'),
        result: t('inno-uni.result'),
        extra: "edu-uni",
        link: "https://innopolis.university/en/"
    },
    {
        name: t('hsk.name'),
        duration: t('hsk.duration'),
        field: t('hsk.field'),
        result: t('hsk.result'),
        extra: "edu-hsk",
        link: "https://www2.daad.de/deutschland/studienangebote/sommerkurse/de/detail/4897/"
    },
    {
        name: t('zhu.name'),
        duration: t('zhu.duration'),
        field: t('zhu.field'),
        result: t('zhu.result'),
        extra: "edu-zhu",
        link: "https://isc.bit.edu.cn/admissionsaid/spss/languageulture/index.htm"
    },
    {
        name: t('inno-lyc.name'),
        duration: t('inno-lyc.duration'),
        field: t('inno-lyc.field'),
        result: t('inno-lyc.result'),
        extra: "edu-lyc",
        link: "https://www.innopolis.com/en/services/innopolis-lyceum"
    },
    {
        name: t('gymnasium.name'),
        duration: t('gymnasium.duration'),
        field: t('gymnasium.field'),
        result: t('gymnasium.result'),
        extra: "edu-sch",
        link: "https://edu.tatar.ru/aviastroit/page2189.htm"
    }
];

export const hobby = (t) => [
    {
        name: t('hobby.guitar.name'),
        description: t('hobby.guitar.description'),
        id: "guitar"
    },
    {
        name: t('hobby.travel.name'),
        description: t('hobby.travel.description'),
        id: "travel"
    },
    {
        name: t('hobby.driving.name'),
        description: t('hobby.driving.description'),
        id: "driving"
    },
    {
        name: t('hobby.coins.name'),
        description: t('hobby.coins.description'),
        id: "coins"
    }
]
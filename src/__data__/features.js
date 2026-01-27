export const generateFeatures = (prefix, n) => {
    const lst = [];
    for (let i = 0; i < n; i++) {
        lst.push(`${prefix}${i}`);
    }

    return lst;
}
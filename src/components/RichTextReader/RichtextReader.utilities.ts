const formatRichText = (richText: string) => {
    const formattedText = richText
    .replace(/## (.*?)\n/g, '<h2>$1</h2>\n')
    .replace(/# (.*?)\n/g, '<h1>$1</h1>\n')
    .replace(/### (.*?)\n/g, '<h3>$1</h3>\n')
    .replace(/#### (.*?)\n/g, '<h4>$1</h4>\n')
    .replace(/##### (.*?)\n/g, '<h5>$1</h5>\n')
    .replace(/###### (.*?)\n/g, '<h6>$1</h6>\n');

    return formattedText.trim();
}

export {
 formatRichText
}
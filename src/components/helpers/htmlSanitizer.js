import sanitizeHtml from 'sanitize-html';

export const htmlSanitizer = (html, options = {}) => {
    const sanitizeHtmlOptions = {
        allowedTags: ['span'],
        allowedAttributes: {
            span: ['class'],
        },
    };

    return sanitizeHtml(html, sanitizeHtmlOptions);
}



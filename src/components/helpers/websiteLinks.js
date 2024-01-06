export const websiteLinks = ( button ) => {
    switch (button) {
        case "mail":
            window.open("mailto:dawidszymanski.dev@outlook.com", "_blank");
            break;
        case "github":
            window.open("https://www.github.com/szymanskidawid", "_blank");
            break;
        case "linkedin":
            window.open("https://www.linkedin.com/in/szymanskidawid", "_blank");
            break;
        case "repoProject1":
            window.open("https://github.com/szymanskidawid/WebsitePortfolio", "_blank");
            break;
        case "repoProject2":
            window.open("https://github.com/szymanskidawid/EmployeeManagement", "_blank");
            break;
        default:
            break;
    }
}
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
        case "project1":
            window.open("https://github.com/szymanskidawid/WebsitePortfolio", "_blank");
            break;
        case "project2":
            window.open("https://github.com/szymanskidawid/EmployeeManagement", "_blank");
            break;
        case "project3":
            window.open("https://github.com/szymanskidawid/e-commerce-store", "_blank");
            break;
        case "e-commerce-store":
            window.open("https://dsz-e-commerce-store.netlify.app");
        default:
            break;
    }
}
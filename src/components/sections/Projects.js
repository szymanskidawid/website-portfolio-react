import { useState } from "react"

import Project1_GIF_1 from '../../assets/gifs/project1-1.gif'
import Project1_GIF_2 from '../../assets/gifs/project1-2.gif'
import Project1_GIF_3 from '../../assets/gifs/project1-3.gif'
import Project2_GIF_1 from '../../assets/gifs/project2-1.gif'
import Project2_GIF_2 from '../../assets/gifs/project2-2.gif'
import Project2_GIF_3 from '../../assets/gifs/project2-3.gif'

const Projects = {
    project1: {
        header: "Portfolio Website",
        text1: "I have created this very website to display my Front-End Development skills and have my own place to add everything that involve my employment history and current programming abilities.",
        text2: "My focus was on using basic Web Development languages such as HTML, CSS and JavaScript. Additionally, I have used a Font Awesome library for icons with variousanimation and Google Fonts. Additionally I have focused on making all of these features work together for a Responsive Web Design which is a staple of Web Development.",
        text3: "This website contains light/dark mode switch and language change which are common practices that help appeal to wider range of users.",
        gifs: [
            {
                src: Project1_GIF_1,
                alt: 'Project 1 GIF-1',
                label: "Dark/Light Mode"
            },
            {
                src: Project1_GIF_2,
                alt: 'Project 1 GIF-2',
                label: "Two Languages"
            },
            {
                src: Project1_GIF_3,
                alt: 'Project 1 GIF-3',
                label: "Hyperlink Buttons"
            }
        ],
        technologies: "HTML CSS JavaScript JSON"
    },

    project2: {
        header: 'Employee Management App',
        text1: 'This application is a display of my Full Stack Development skills and it is a basic version of employee management software that could be used in HR department.',
        text2: 'It allows users to create/edit/delete data that automatically updates in a SQL Database. There is also an option to view the main Employee table inside Windows Forms that updates all records with a press of Refresh Button and allows the user to search any specific phrases inside the table.',
        text3: 'Design has been focused on minimalism and readability as I believe this type of app should focus on simplicity and performance rather than graphics and animations that will slow the program and reduce the efficiency of the person using it.',
        gifs: [
            {
                src: Project2_GIF_1,
                alt: 'Project 2 GIF-1',
                label: 'Updade Entries / Refresh Main Table'
            },
            {
                src: Project2_GIF_2,
                alt: 'Project 2 GIF-2',
                label: 'Delete an Entry'
            },
            {
                src: Project2_GIF_3,
                alt: 'Project 2 GIF-3',
                label: 'Works with a SQL database'
            }
            ],
        technologies: "C# Windows Forms SQL"
    }
};

export default Projects
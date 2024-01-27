import Project1_GIF_1 from '../../../assets/gifs/project1-1.gif'
import Project1_GIF_2 from '../../../assets/gifs/project1-2.gif'
import Project1_GIF_3 from '../../../assets/gifs/project1-3.gif'
import Project2_GIF_1 from '../../../assets/gifs/project2-1.gif'
import Project2_GIF_2 from '../../../assets/gifs/project2-2.gif'
import Project2_GIF_3 from '../../../assets/gifs/project2-3.gif'
import Project3_GIF_1 from '../../../assets/gifs/project3-1.gif'
import Project3_GIF_2 from '../../../assets/gifs/project3-2.gif'
import Project3_GIF_3 from '../../../assets/gifs/project3-3.gif'
import { useTranslate } from 'react-polyglot';

const Projects = () => {
    const t = useTranslate();
    
    const projects = {
        project1: {
            header: t('project1Header'),
            text1: t('project1Text1'),
            text2: t('project1Text2'),
            text3: t('project1Text3'),
            gifs: [
                {
                    src: Project1_GIF_1,
                    alt: 'Project 1 GIF-1',
                    label: t('project1Label1'),
                },
                {
                    src: Project1_GIF_2,
                    alt: 'Project 1 GIF-2',
                    label: t('project1Label2'),
                },
                {
                    src: Project1_GIF_3,
                    alt: 'Project 1 GIF-3',
                    label: t('project1Label3'),
                }
            ],
            technologies: "REACT.JS CSS JSON"
        },
    
        project2: {
            header: t('project2Header'),
            text1: t('project2Text1'),
            text2: t('project2Text2'),
            text3: t('project2Text3'),
            gifs: [
                {
                    src: Project2_GIF_1,
                    alt: 'Project 2 GIF-1',
                    label: t('project2Label1'),
                },
                {
                    src: Project2_GIF_2,
                    alt: 'Project 2 GIF-2',
                    label: t('project2Label2'),
                },
                {
                    src: Project2_GIF_3,
                    alt: 'Project 2 GIF-3',
                    label: t('project2Label3'),
                }
                ],
            technologies: "C# Windows Forms SQL"
        },

        project3: {
            header: t('project3Header'),
            text1: t('project3Text1'),
            text2: t('project3Text2'),
            text3: t('project3Text3'),
            gifs: [
                {
                    src: Project3_GIF_1,
                    alt: 'Project 3 GIF-1',
                    label: t('project3Label1'),
                },
                {
                    src: Project3_GIF_2,
                    alt: 'Project 3 GIF-2',
                    label: t('project3Label2'),
                },
                {
                    src: Project3_GIF_3,
                    alt: 'Project 3 GIF-3',
                    label: t('project3Label3'),
                }
            ],
            technologies: "REACT.JS EXPRESS.JS MONGOOSE"
        },
    };
    return projects;
};

export default Projects
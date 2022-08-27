export const state = () => ({
    skills: [
        {
            id: '1',
            title: 'UI/UX',
            description: 'Designing web / App interfaces.',
            tools: ['Figma', 'Adobe XD']
        },
        {
            id: '2',
            title: 'Web development',
            description: 'Web app development.',
            tools: ['Vue js', 'Nuxt js', 'Javascript']
        },
        {
            id: '3',
            title: 'Product Design',
            description: 'Flyer design.',
            tools: ['Photoshop']
        }
    ],
    educations: [
        {
            id: '1',
            year: 2022,
            discipline: 'Computer Science',
            school: 'Ladoke AKintola University of Technology',
            title: 'B.Tech',

        },
        {
            id: '1',
            year: 2020,
            discipline: 'Fullstack',
            school: 'Zero to Master (Complete Web Developer) - Udemy',
            title: 'Web Development',

        },
    ],
    experiences: [
        {
            id: '1',
            start: '2018',
            end: '2020',
            company: 'Ladoke Akintola University of Technology ICT - Intern'
        },
        {
            id: '2',
            start: 'October 2020',
            end: 'April 2021',
            company: 'Aimtoget Limited - Intern'
        },
        {
            id: '3',
            start: 'March 2022',
            end: 'July 2022',
            company: 'Tabagoods - Frontend'
        },

    ],
    projects: [
        {
            id: '1',
            image: 'https://images.pexels.com/photos/3071/hand-smartphone-technology-calling.jpg',
            title: 'Contact',
            shortNote: 'Save your contacts with other details',
            description: 'Authentication is required for all users to save their contacts and all the necessary details concerning the friend and the user can edit and delete any contact of his/her choice. PWA is installed',
            link: 'https://phoneup.netlify.app'
        },
        {
            id: '2',
            image: 'https://images.pexels.com/photos/4337174/pexels-photo-4337174.jpeg',
            title: 'Diary',
            shortNote: 'Write your daily diary',
            description: 'Users get to write their diary and can also make changes, favourite some and edit the diary as well. It also have pwa installed',
            link: 'https://modiary.netlify.app'
        },
        {
            id: '3',
            image: 'https://images.pexels.com/photos/6869047/pexels-photo-6869047.jpeg',
            title: 'Grocery list',
            shortNote: 'Project for my student',
            description: 'I will like to show a project i did as a tutorial for my students using vanilla js. It is a grocery list app.',
            link: 'https://shopsegsalert.netlify.app'
        },
    ]

})
export const getters = {
    skills(state) {
        return state.skills
    },
    educations(state) {
        return state.educations
    },
    experiences(state) {
        return state.experiences
    },
    projects(state) {
        return state.projects
    }
}
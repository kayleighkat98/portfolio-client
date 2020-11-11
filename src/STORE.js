const Projects = [
    {
        id : 1,
        name : 'Donation-Hub',
        stack: 'full',
        text: [
            {summary : 
                `In most scenarios, people are willing to donate. However, it is not always clear what organizations really need or how much of what they are seeking is needed. 
                In order to help strengthen the donation process, we decided to create Donation-Hub. 
                Donation-Hub exists as a way to centralize the efforts community champions (donators) need in order to best serve their communities. 
                By using the DonationHub website, users are able to locate organization near them, browse items that location needs, and give as they please accordingly. 
                Users are also able to go in and add donation sites for organizations that may not be as internet accesible.`
            },
            {role : 
                `In a team of 3 other student developers, my role played parts in all aspects of creating this app. 
                However, the majority of my efforts were spent developing the client side.
                I am most proud of designing and creating the route contents for adding a new donation center.
                I took advantage of the google api we were already using where ever I could, while also keeping the request count to the bare minimum.
                Though I am proud of the result I look forward to adding more instructions for the user, in case they grow confused when adding details to the location.`
            }
        ],
        links: [
            {
                stack: 'front',
                type: 'production',
                domain: 'vercel',
                url: 'https://donation-hub-client.vercel.app/'
            },
            {
                stack: 'back',
                type: 'prod',
                domain: 'heroku',
                url: 'https://cryptic-fjord-37790.herokuapp.com/'
            },
            {
                stack: 'front',
                type: 'dev',
                domain: 'github',
                url: 'https://github.com/kayleighkat98/donation-hub-client'
            },
            {
                stack: 'back',
                type: 'dev',
                domain: 'github',
                url: 'https://github.com/jbugayev18/DonationHub-API'
            }
        ]
    },
    {
        id : 2,
        name : 'Kitchen Hero',
        stack: 'full',
        text: [
            {summary : 
                `Let's face it. We don't always remember what we have in our fridge. This means that sometimes we have to face terribly rotten food when deep cleaning. Wouldn't it be nice to have an easy reference for what has expired in your pantry and fridge?
                Introducing Kitchen-Hero. Log in to add the ingredients you have and if/when they expire. If you are a returning user, take a look to see if any of your items have expired and throw them away before they get moldy! `
            },
            {role : 
                `As the sole creater of Kitchen Hero, I imagined and birthed what it is today. 
                I am most proud of the concept Kitchen-Hero is founded on.
                Personally, I have had a decent amount of struggle finding a proper solution when managing my kitchen even after scouring the web for resources.
                This is a passion project, that in time will have more incredible features such as generating recipies based on user preference and inventory.`
            }
        ],
        links: [
            {
                stack: 'front',
                type: 'production',
                domain: 'vercel',
                url: 'https://kitchen-hero.kayleighkat98.vercel.app/'
            },
            {
                stack: 'back',
                type: 'prod',
                domain: 'heroku',
                url: 'https://fierce-hollows-91839.herokuapp.com/'
            },
            {
                stack: 'front',
                type: 'dev',
                domain: 'github',
                url: 'https://github.com/kayleighkat98/kitchen_hero-client'
            },
            {
                stack: 'back',
                type: 'dev',
                domain: 'github',
                url: 'https://github.com/kayleighkat98/kitchen_hero-server'
            }
        ]
    },
    {
        id : 3,
        name : 'Petful',
        stack: 'full',
        text: [
            {summary : 
                `Petful is an adoption agency app that uses singly linked lists to adopt out pets on a first-come first-serve basis. 
                By signing up for adoption, a user will be added to a list and will then be able to adopt a pet based on the oldest pet available at the time.`
            },
            {role : 
                `Tiffany Summerford (my partner in this project) and I set out to divide and conquer with this app.
                I designed and implemented the front end while she did the same with the server.
                However, the majority of my efforts were spent developing the client side.
                I am most proud of the recursive timeout function I made to demo the adoption process.
                The function is made to slowly work the user to the front of the line by removing the first person and a random pet every 5 seconds until the user is first, then with the same timeout add a random person to the end of the line until there is a total of 5 in line.
                Though I am proud of the result I look forward to adding more features.
                For example, I plan to display record of past adoptions as well as display a countdown when running the demo. `
            }
        ],
        links: [
            {
                stack: 'front',
                type: 'production',
                domain: 'vercel',
                url: 'https://petful-client-peach.vercel.app/'
            },
            {
                stack: 'back',
                type: 'prod',
                domain: 'heroku',
                url: 'https://fierce-hollows-91839.herokuapp.com/'
            },
            {
                stack: 'front',
                type: 'dev',
                domain: 'github',
                url: 'https://github.com/thinkful-ei-quail/DSA-Petful-Client-kay-tiff'
            },
            {
                stack: 'back',
                type: 'dev',
                domain: 'github',
                url: 'https://github.com/thinkful-ei-quail/DSA-Petful-Server-Tiff-Kayleigh'
            }
        ]
    },
];
const Tech = [
//FRONT
    {
        name: 'react',
        stack: 'front',
        projects: [1, 2, 3]
    },
    {
        name: 'react-router-dom',
        stack: 'front',
        projects: [1, 2, 3]
    },
    {
        name: 'classnames',
        stack: 'front',
        projects: [1, 2]
    },
    {
        name: 'google maps api',
        stack: 'front',
        projects: [3]
    },
    {
        name: 'google places api',
        stack: 'front',
        projects: [3]
    },
    {
        name: 'jwt-decode',
        stack: 'front',
        projects: [1, 2, 3]
    },
//DEV
    {
        name: 'cross-env',
        stack: 'front',
        projects: [1, 2]
    },

//BACK
    {
        name: 'node',
        stack: 'back',
        projects: [1, 3]
    },
    {
        name: 'npm',
        stack: 'back',
        projects: [1]
    },
    {
        name: 'body-parser',
        stack: 'back',
        projects: [3]
    },

    {
        name: 'bcryptjs',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'cors',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'dotenv',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'express',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'fetch',
        stack: 'back',
        projects: [1]
    },
    {
        name: 'helmet',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'jsonwebtoken',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'knex',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'morgan',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'pg',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'uuid',
        stack: 'back',
        projects: [3]
    },
    {
        name: 'winston',
        stack: 'back',
        projects: [3]
    },
    {
        name: 'postgrator-cli',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'xss',
        stack: 'back',
        projects: [1, 2]
    },
//DEV
    {
        name: 'chai',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'mocha',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'nodemon',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'supertest',
        stack: 'back',
        projects: [1, 2, 3]
    }
];
const STORE = {Projects,Tech}
export default STORE;
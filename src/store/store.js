const Projects = [
    {
        id : 1,
        name : 'Donation-Hub',
        stack: 'full',
        text: {
            summary : 
                `In most scenarios, people are willing to donate. However, it is not always clear what organizations really need or how much of what they are seeking is needed. 
                In order to help strengthen the donation process, we decided to create Donation-Hub. 
                Donation-Hub exists as a way to centralize the efforts community champions (donators) need in order to best serve their communities. 
                By using the DonationHub website, users are able to locate organization near them, browse items that location needs, and give as they please accordingly. 
                Users are also able to go in and add donation sites for organizations that may not be as internet accesible.`
            ,
            role : 
                `In a team of 3 other student developers, my role played parts in all aspects of creating this app. 
                However, the majority of my efforts were spent developing the client side.
                I am most proud of designing and creating the route contents for adding a new donation center.
                I took advantage of the google api we were already using where ever I could, while also keeping the request count to the bare minimum.
                Though I am proud of the result I look forward to adding more instructions for the user, in case they grow confused when adding details to the location.`
            
        },
        links: {
            prod_url: 'https://donation-hub-client.vercel.app/',
            client_git: 'https://github.com/kayleighkat98/donation-hub-client',
            server_git: 'https://github.com/jbugayev18/DonationHub-API'
        },
        images: [
            {
                type: 'mobile',
                name: 'landing',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/landing.png'
            },
            {
                type: 'mobile',
                name: 'confirm',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/confirm.png'
            },
            {
                type: 'mobile',
                name: 'items',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/items.png'
            },
            {
                type: 'mobile',
                name: 'landing',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/location.png'
            },
            {
                type: 'mobile',
                name: 'results',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/results.png'
            },
            {
                type: 'mobile',
                name: 'confirm',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/confirm.png'
            },
            {
                type: 'mobile',
                name: 'review',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/results.png'
            },
            {
                type: 'mobile',
                name: 'user',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Donation-Hub/user.png'
            }
        ]
    },
    {
        id : 2,
        name : 'Kitchen Hero',
        stack: 'full',
        text: {
            summary : 
                `Let's face it. We don't always remember what we have in our fridge. 
                This means that sometimes we have to face terribly rotten food when deep cleaning. 
                Wouldn't it be nice to have an easy reference for what has expired in your pantry and fridge?
                Introducing Kitchen-Hero. 
                Log in to add the ingredients you have and if/when they expire. 
                If you are a returning user, take a look to see if any of your items have expired and throw them away before they get moldy! `
            ,
            role : 
                `As the sole creater of Kitchen Hero, I imagined and birthed what it is today. 
                I am most proud of the concept Kitchen-Hero is founded on.
                Personally, I have had a decent amount of struggle finding a proper solution when managing my kitchen even after scouring the web for resources.
                This is a passion project, that in time will have more incredible features such as generating recipies based on user preference and inventory.`
            
        },
        links: {
            prod_url: 'https://kitchen-hero.kayleighkat98.vercel.app/',
            client_git: 'https://github.com/kayleighkat98/kitchen_hero-client',
            server_git: 'https://github.com/kayleighkat98/kitchen_hero-server'
        },
        images: [
            {
                type: 'mobile',
                name: 'home',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Kitchen-Hero/home.png'
            },
            {
                type: 'mobile',
                name: 'about',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Kitchen-Hero/about.png'
            },
            {
                type: 'mobile',
                name: 'expired',
                url: 'https://storage.cloud.google.com/kay-the-web-dev/images/Kitchen-Hero/expired.png'
            },
            {
                type: 'mobile',
                name: 'new',
                url: 'https://storage.googleapis.com/kay-the-web-dev/images/Kitchen-Hero/new.png'
            }
        ]
    },
    {
        id : 3,
        name : 'Petful',
        stack: 'full',
        text: {
            summary : 
                `Petful is an adoption agency app that uses singly linked lists to adopt out pets on a first-come first-serve basis. 
                By signing up for adoption, a user will be added to a list and will then be able to adopt a pet based on the oldest pet available at the time.`
            ,
            role : 
                `Tiffany Summerford (my partner in this project) and I set out to divide and conquer with this app.
                I designed and implemented the front end while she did the same with the server.
                However, the majority of my efforts were spent developing the client side.
                I am most proud of the recursive timeout function I made to demo the adoption process.
                The function is made to slowly work the user to the front of the line by removing the first person and a random pet every 5 seconds until the user is first, then with the same timeout add a random person to the end of the line until there is a total of 5 in line.
                Though I am proud of the result I look forward to adding more features.
                For example, I plan to display record of past adoptions as well as display a countdown when running the demo. `
                
            },
            links: {
                prod_url: 'https://petful-client-peach.vercel.app/',
                client_git: 'https://github.com/thinkful-ei-quail/DSA-Petful-Client-kay-tiff',
                server_git: 'https://github.com/thinkful-ei-quail/DSA-Petful-Server-Tiff-Kayleigh'
            },
            images: [
                {
                    type: 'desktop',
                    name: 'adopt',
                    url: 'https://storage.googleapis.com/kay-the-web-dev/images/FIFO-adoptions/adopt.png'
                },
                {
                    type: 'desktop',
                    name: 'landing',
                    url: 'https://storage.googleapis.com/kay-the-web-dev/images/FIFO-adoptions/landing.png'
                },
                {
                    type: 'desktop',
                    name: 'wait',
                    url: 'https://storage.googleapis.com/kay-the-web-dev/images/FIFO-adoptions/wait.png'
                }
            ]
        },
    ];
    const Tech = [
    {
        name: 'BcryptJS',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'Body Parser',
        stack: 'back',
        projects: [3]
    },
    {
        name: 'Chai',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'Classnames',
        stack: 'front',
        projects: [1, 2]
    },
    {
        name: 'CORS',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'Cross Env',
        stack: 'front',
        projects: [1, 2]
    },
    {
        name: 'Dotenv',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'Express',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'Fetch',
        stack: 'back',
        projects: [1]
    },
    {
        name: 'Google Maps API',
        stack: 'front',
        projects: [1]
    },
    {
        name: 'Google Places API',
        stack: 'front',
        projects: [1]
    },
    {
        name: 'Helmet',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'Jsonwebtoken',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'JWT Decode',
        stack: 'front',
        projects: [1, 2, 3]
    },
    {
        name: 'Knex',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'Mocha',
        stack: 'back',
        projects: [1, 2]
    },
    {
        name: 'Morgan',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {   
        name: 'Node',
        stack: 'back',
        projects: [1, 3]
    },
    {
        name: 'Nodemon',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'NPM',
        stack: 'back',
        projects: [1]
    },
    {
        name: 'Pg',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'Postgrator CLI',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'React',
        stack: 'front',
        projects: [1, 2, 3]
    },
    {
        name: 'React Router',
        stack: 'front',
        projects: [1, 2, 3]
    },
    {
        name: 'Supertest',
        stack: 'back',
        projects: [1, 2, 3]
    },
    {
        name: 'UUID',
        stack: 'back',
        projects: [3]
    },
    {
        name: 'Winston',
        stack: 'back',
        projects: [3]
    },
    {
        name: 'XSS',
        stack: 'back',
        projects: [1, 2]
    }
];
const store = {Projects,Tech}
export default store;
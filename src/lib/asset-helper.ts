import img1 from '../assets/projects/1.png'
import img2 from '../assets/projects/2.png'
import img3 from '../assets/projects/3.png'
import img4 from '../assets/projects/4.png'
import img5 from '../assets/projects/5.png'
import img6 from '../assets/projects/6.png'
import img7 from '../assets/projects/7.png'
import bg from '../assets/hero/bg.jpg'
import hero from '../assets/hero/jem.png'
import storybook from '../assets/logo/storybook.png'
import playwright from '../assets/logo/playwright.png'
import jest from '../assets/logo/jest.png'
import testproject from '../assets/logo/testproject.png'
import devtools from '../assets/logo/devtools.png'
import hubspot from '../assets/logo/hubspot.png'
import zapier from '../assets/logo/zapier.png'
import temporal from '../assets/logo/temporal.png'
import mongodb from '../assets/logo/mongodb.png'
import firebase from '../assets/logo/firebase.png'
import postgresql from '../assets/logo/postgresql.png'
import cubejs from '../assets/logo/cubejs.png'
import html from '../assets/logo/html.png'
import css from '../assets/logo/css.png'
import js from '../assets/logo/js.png'
import bootstrap from '../assets/logo/bootstrap.png'
import tailwind from '../assets/logo/tailwind.png'
import reactjs from '../assets/logo/reactjs.png'
import webflow from '../assets/logo/webflow.png'
import php from '../assets/logo/php.png'
import graphql from '../assets/logo/graphql.png'
import expressjs from '../assets/logo/expressjs.png'
import nodejs from '../assets/logo/nodejs.png'
import cv from '../assets/resume/cv.pdf'
import { TMenuLinks } from './props-types'

export const assets = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    bg,
    hero,
    storybook,
    playwright,
    jest,
    testproject,
    devtools,
    hubspot,
    zapier,
    temporal,
    mongodb,
    firebase,
    postgresql,
    cubejs,
    html,
    css,
    js,
    bootstrap,
    tailwind,
    reactjs,
    webflow,
    php,
    graphql,
    expressjs,
    nodejs,
    cv
}

export const menuLinks: TMenuLinks = {
    'frontend': {
        title: 'Frontend Development',
        swap: [
            { brand: 'HTML', image: html },
            { brand: 'CSS', image: css },
            { brand: 'JavaScript', image: js },
            { brand: 'Bootstrap', image: bootstrap },
            { brand: 'Tailwind', image: tailwind },
            { brand: 'React JS', image: reactjs },
            { brand: 'Webflow', image: webflow },
        ]
    },
    'backend': {
        title: 'Backend Development',
        swap: [
            { brand: 'JavaScript', image: js },
            { brand: 'PHP', image: php },
            { brand: 'GraphQL', image: graphql },
            { brand: 'Express JS', image: expressjs },
            { brand: 'Node JS', image: nodejs },
        ]
    },
    'database': {
        title: 'Database Administration',
        swap: [
            { brand: 'MongoDB', image: mongodb },
            { brand: 'Firebase', image: firebase },
            { brand: 'PostgreSQL', image: postgresql },
            { brand: 'CubeJS', image: cubejs },
        ]
    },
    'testing': {
        title: 'QA Testing',
        swap: [
            { brand: 'Playwright', image: playwright },
            { brand: 'Jest', image: jest },
            { brand: 'Storybook', image: storybook },
            { brand: 'Testproject', image: testproject },
            { brand: 'Chrome Devtools and Extensions', image: devtools },
        ]
    },
    'automation': {
        title: 'Workflow Automation',
        swap: [
            { brand: 'HubSpot', image: hubspot },
            { brand: 'Zapier', image: zapier },
            { brand: 'Temporal IO', image: temporal },
        ]
    },
}

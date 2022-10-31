import timesheetAppImage from '../img/projects/TimesheetAppImage.png'
import toDoAppImage from '../img/projects/ToDoAppImage.png'
import userDatabaseImage from '../img/projects/UserDatabaseImage.png'
import threejsDemoImage from '../img/projects/ThreeJSDemoImage.png'

const projects = [
    {
        completed: "✅ Completed",
        title: "Timesheet App",
        description: "HR Timesheet app for logging employees of various departments and their hours. This data is stored in a Firebase Firestore database.",
        tags: ['Angular', 'Firebase', 'Database'],
        github: "https://github.com/talmage89/Timesheet-App",
        linkToSite: "https://timesheet-app-83f91.web.app/analytics",
        img: timesheetAppImage,
        imgOnLeft: false
    },
    {
        completed: "✅ Completed",
        title: "To-Do App",
        description: "Advanced DOM manipulation demonstrated through a To-Do app using creation and removal of elements, JavaScript animations, contentEditable entries, and more.",
        tags: ['JavaScript', 'HTML', 'CSS'],
        github: "https://github.com/talmage89/ToDo_App",
        linkToSite: "https://tbergeson.github.io/ToDo_App/",
        img: toDoAppImage,
        imgOnLeft: true
    },
    {
        completed: "✅ Completed",
        title: "User Database Frontend",
        description: "Full CRUD functionality for a MongoDB database with a React frontend. This GUI uses Express to communicate with the database.",
        tags: ['React', 'MongoDB', 'Express.js'],
        github: "https://github.com/talmage89/User-Database",
        img: userDatabaseImage,
        imgOnLeft: false
    },
    {
        completed: "✅ Completed",
        title: "ThreeJS App",
        description: "Exploration with 3D assset rendering in the browser. The scene's camera position changes based on the user's scroll position.",
        tags: ["ThreeJS", "JavaScript", "HTML"],
        github: "https://github.com/talmage89/ThreeJSDemo2",
        linkToSite: "https://talmage89.github.io/ThreeJSDemo2/",
        img: threejsDemoImage,
        imgOnLeft: true
    }
]

export default projects;
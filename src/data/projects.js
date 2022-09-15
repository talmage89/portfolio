import timesheetAppImage from '../img/projects/TimesheetAppImage.png'
import toDoAppImage from '../img/projects/ToDoAppImage.png'
import userDatabaseImage from '../img/projects/UserDatabaseImage.png'
import pollywogGamesImage from '../img/projects/PollywogGamesImage.png'

const projects = [
    {
        completed: "✅ Completed",
        title: "Timesheet App",
        description: "HR Timesheet app for enter employees in various departments and their hours, stored in Firebase Firestore as a remote database.",
        tags: ['Angular', 'Firebase', 'Database'],
        github: "https://github.com/talmage89/Timesheet-App",
        linkToSite: "https://timesheet-app-83f91.web.app/analytics",
        img: timesheetAppImage,
        imgOnLeft: false
    },
    {
        completed: "✅ Completed",
        title: "To-Do App",
        description: "Advanced DOM manipulation demonstrated through a To-Do app using creation and removal of elements,  classes, contentEditable, and more.",
        tags: ['JavaScript', 'HTML', 'CSS'],
        github: "https://github.com/talmage89/ToDo_App",
        linkToSite: "https://tbergeson.github.io/ToDo_App/",
        img: toDoAppImage,
        imgOnLeft: true
    },
    {
        completed: "✅ Completed",
        title: "User Database Frontend",
        description: "Full CRUD functionality on a MongoDB created with a React frontend. This GUI uses Express to communicate with the database.",
        tags: ['React', 'MongoDB', 'Express.js'],
        github: "https://github.com/talmage89/User-Database",
        img: userDatabaseImage,
        imgOnLeft: false
    },
    {
        completed: "⏸ In Development",
        title: "Pollywog Games Website",
        description: "Company website for Pollywog Games, the creators of Card Crusade and Barnard's Star on the App Store. Check their games out today!",
        tags: ['Hugo', 'SASS'],
        linkToSite: "https://pollywog.games/",
        img: pollywogGamesImage,
        imgOnLeft: true
    }
]

export default projects;
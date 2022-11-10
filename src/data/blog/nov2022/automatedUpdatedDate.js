import footerDate from './automatedUpdatedDateImg/footer-date.png'

const post = {
  "_id": "0",
  "title": "A Slight Bit of Automation",
  "content": [
    "Over the past month or two, I've started to add some features on this site that I've been thinking about for a while. One of these features is a piece of text in the footer of this site that keeps track of when the site was last updated: ",
    `IMAGEURL:${footerDate}`,
    "This small 'Updated' tag shows the month and year of this project's last Git commit.",
    "Originally, I hard-coded this tag as a simple <p> element. This was obviously easy to do, but it was easy to forget to update it every time a new month rolled around. I'm still actively working on this site so this informative feature has become a pesky and tenuous detail.",
    "So, I decided to automate it!",
    "This was surprisingly easy to do. As with many things in programming, the biggest challenge to overcome was simply knowing where to start. There are probably many ways to do this, but here's what I did:",
    "HEADER:1. Get date of Git commit",
    "When starting this project, I found myself at a loss for what kind of changes I should count as updates, and which of my platforms I should get this date from. I settled for using the date of the most recent Git commit, which is stored in the repository itself.",
    "With the Git CLI command ITALIC{git-show}, you can see information on different Git objects, and namely, Git commits. With some formatting, this command can show the date of the most recent commit.",
    "CODE:git show -s --format=%ci",
    "This command is configured to output an ISO 8601 date, defined by the 'ITALIC{--format=%ci} ' flag.",
    "A CLI command is useful, but I need to use this date information in my code, so I wrote the output of the CLI command into a ITALIC{.txt} file that I keep in my ITALIC{src} directory.",
    "CODE:git show -s --format=%ci > src/lastUpdated.txt",
    "HEADER:2. Use date in code",
    "I built this site with React, and my footer (which displays the date of my last update) is coded into my App component. So, in ITALIC{App.js}, I imported the Last Updated ITALIC{.txt} file to ensure that the file is bundled with the rest of the project files during a production build.",
    "CODE:import lastUpdatedTextFile from './lastUpdated.txt';",
    "Then, I fetched the file and got the file contents out of the response as text. Now I had the Last Updated date stored as a string. I needed to get the date and year out of this date string to use in my Footer. Instead of trying to craft some complex RegEx to obtain these values, I converted the string into a Date object which has accessible ITALIC{getMonth()} and ITALIC{getYear()} methods.",
    `CODE:
fetch(lastUpdatedTextFile)
    .then(r => r.text())
    .then(text => {
      const fullDate = new Date(text);
    });`,
    "I was getting close! I had the correct date in a Date object. Next, I built a string. I wrote an array of month names, and got the index for the correct month using ITALIC{getMonth()}. Onto this month name I appended the year using ITALIC{getYear()}, and stored this date string as a state variable so I could use it in my footer.",
    `CODE:
const [updatedDate, setUpdatedDate] = useState();
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]
fetch(lastUpdatedTextFile)
    .then(r => r.text())
    .then(text => {
      const fullDate = new Date(text);
      setUpdatedDate(months[fullDate.getMonth()] + ' ' + fullDate.getFullYear());
    });`,
    "Finally, I used this state variable in the footer, only including the <p> element if the updatedDate variable was not undefined.",
    "CODE:{updatedDate && <p>Updated {updatedDate}</p>}",
    "HEADER:3. Automate",
    "So far, this process would only work if I manually updated the ISO date in my ITALIC{lastUpdated.txt} file every time I wanted the Updated date to change. So, to update this file before building and deploying the app, I changed the 'npm run build' script in my ITALIC{package.json} file.",
    "CODE:\"build\": \"git show -s --format=%ci > src/lastUpdated.txt && react-scripts build\"",
    "This script now runs the git-show command and writes the output to the ITALIC{lastUpdated.txt} file before building.",
    "HEADER:Final thoughts",
    "I was happy that this feature was easy to implement. Right now, the Updated date only updates when I create a production build of the app. I might consider finding a way to update the file each time I commit to the Git repo. However, I mainly care about the accuracy of the date in the hosted version of this site, which requires a fresh production build before deployment.",
    "Also, with this current implementation, building for production changes my local files. This means my local files are slightly ahead of the latest Git commit by the time the build is finished. It's unsatisfying to see my completely colorless repository files turn yellow after the build script runs. This means I have to commit my changes to the repo after running my build script. I will live."
  ],
  "updated_date": "November 10th, 2022",
  "tags": ["Git", "NPM"]
}

export default post;
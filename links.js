/**
 * Mr. M's Link Dashboard - Central Configuration
 * Simply edit this file to instantly change links, schedules, or colors.
 */
window.DASHBOARD_DATA = {
    links: [
        {
            category: "Schools",
            description: "Select schedule or view staff lists for each school.",
            accentColor: "border-l-4 border-l-rose-500",
            groups: [
                {
                    subHeading: "JLAES🐊",
                    items: [
                        { title: "Referrals 📊", url: "[https://example.com/jlaes-referrals](https://example.com/jlaes-referrals)", subtitle: "Referral spreadsheet database" },
                        { title: "Schedule 📅", url: "[https://example.com/jlaes-schedule](https://example.com/jlaes-schedule)", subtitle: "Bell & class times" },
                        { title: "Faculty 👥", url: "[https://example.com/jlaes-faculty](https://example.com/jlaes-faculty)", subtitle: "Staff & email roster" },
                        { title: "School Drive 📁", url: "[https://example.com/jlaes-drive](https://example.com/jlaes-drive)", subtitle: "Shared Google Drive" }
                    ]
                },
                {
                    subHeading: "FOES🐦",
                    items: [
                        { title: "Referrals 📊", url: "[https://example.com/foes-referrals](https://example.com/foes-referrals)", subtitle: "Referral spreadsheet database" },
                        { title: "Schedule 📅", url: "[https://example.com/foes-schedule](https://example.com/foes-schedule)", subtitle: "Bell & class times" },
                        { title: "Faculty 👥", url: "[https://example.com/foes-faculty](https://example.com/foes-faculty)", subtitle: "Staff & email roster" },
                        { title: "Morning Announcements 📣", url: "[https://example.com/foes-announcements](https://example.com/foes-announcements)", subtitle: "Daily morning broadcast" },
                        { title: "School Hub 🏫", url: "[https://example.com/foes-hub](https://example.com/foes-hub)", subtitle: "FOES shared portal" }
                    ]
                },
                {
                    subHeading: "HVA🖥️",
                    items: [
                        { title: "Referrals 📊", url: "[https://example.com/hva-referrals](https://example.com/hva-referrals)", subtitle: "Referral spreadsheet database" },
                        { title: "Schedule 📅", url: "[https://example.com/hva-schedule](https://example.com/hva-schedule)", subtitle: "Bell & class times" },
                        { title: "Faculty 👥", url: "[https://example.com/hva-faculty](https://example.com/hva-faculty)", subtitle: "Staff & email roster" }
                    ]
                }
            ]
        },
        {
            category: "Access",
            description: "Direct student and teacher portal gateways.",
            accentColor: "border-l-4 border-l-amber-500",
            items: [
                { title: "Mr M's Drive", url: "[https://drive.google.com](https://drive.google.com)", subtitle: "Google Drive files" },
                { title: "Planning", url: "[https://example.com/planning](https://example.com/planning)", subtitle: "Lesson & schedule planning" },
                { title: "DL Course", url: "[https://example.com/dl](https://example.com/dl)", subtitle: "Digital learning systems" },
                { title: "Schoology", url: "[https://schoology.com](https://schoology.com)", subtitle: "LMS & coursework" },
                { title: "PowerSchool", url: "[https://powerschool.com](https://powerschool.com)", subtitle: "Grades & records" },
                { title: "CogAT", url: "[https://riversideinsights.com](https://riversideinsights.com)", subtitle: "Cognitive abilities test" },
                { title: "Clever", url: "[https://clever.com](https://clever.com)", subtitle: "Single sign-on portal" }
            ]
        },
        {
            category: "GRT",
            description: "Gifted Resource Teacher programmatic files and dashboards.",
            accentColor: "border-l-4 border-l-blue-500",
            items: [
                { title: "Friday Focus", url: "[https://example.com/friday-focus](https://example.com/friday-focus)", subtitle: "Weekly focus & notes" },
                { title: "Meeting Agendas", url: "[https://example.com/meeting-agendas](https://example.com/meeting-agendas)", subtitle: "Collaboration & minutes" },
                { title: "Gifted Dashboard", url: "[https://example.com/gifted-dashboard](https://example.com/gifted-dashboard)", subtitle: "Student records & data" },
                { title: "K-5 Advanced Dashboard", url: "[https://example.com/k5-dashboard](https://example.com/k5-dashboard)", subtitle: "Advanced learner tracking" },
                { title: "Staffing", url: "[https://example.com/staffing](https://example.com/staffing)", subtitle: "Allocations & rosters" }
            ]
        },
        {
            category: "Gifted Curriculum",
            description: "Primary responses and grade curriculum systems.",
            accentColor: "border-l-4 border-l-purple-500",
            items: [
                { title: "K-2 Response", url: "[https://example.com/k2-curriculum](https://example.com/k2-curriculum)", subtitle: "Response materials" },
                { title: "1st", url: "[https://example.com/1st-curriculum](https://example.com/1st-curriculum)", subtitle: "Grade curriculum" },
                { title: "2nd", url: "[https://example.com/2nd-curriculum](https://example.com/2nd-curriculum)", subtitle: "Grade curriculum" },
                { title: "3rd", url: "[https://example.com/3rd-curriculum](https://example.com/3rd-curriculum)", subtitle: "Grade curriculum" },
                { title: "4th", url: "[https://example.com/4th-curriculum](https://example.com/4th-curriculum)", subtitle: "Grade curriculum" },
                { title: "5th", url: "[https://example.com/5th-curriculum](https://example.com/5th-curriculum)", subtitle: "Grade curriculum" }
            ]
        },
        {
            category: "Gifted ID",
            description: "Identification timelines, referral forms, and screening lessons.",
            accentColor: "border-l-4 border-l-cyan-500",
            items: [
                { title: "Timeline", url: "[https://example.com/id-timeline](https://example.com/id-timeline)", subtitle: "Referral & testing windows" },
                { title: "Forms", url: "[https://example.com/id-forms](https://example.com/id-forms)", subtitle: "Referral, permission, and rating scales" },
                { title: "Observation Lessons", url: "[https://example.com/observation-lessons](https://example.com/observation-lessons)", subtitle: "Whole-class screening materials" },
                { title: "GIC Group", url: "[https://example.com/gic-group](https://example.com/gic-group)", subtitle: "Gifted Identification Committee roster" }
            ]
        },
        {
            category: "Admin",
            description: "Administrative portals and employee systems.",
            accentColor: "border-l-4 border-l-slate-500",
            isCollapsible: true,
            items: [
                { title: "HCPS Aligned Curriculum", url: "[https://example.com/hcps-curriculum](https://example.com/hcps-curriculum)", subtitle: "Aligned curriculum framework" },
                { title: "HCPS Tech Desk", url: "[https://example.com/tech-desk](https://example.com/tech-desk)", subtitle: "IT support ticketing system" },
                { title: "PSPL", url: "[https://example.com/pspl](https://example.com/pspl)", subtitle: "Professional learning & training" },
                { title: "TalentEd", url: "[https://example.com/talented](https://example.com/talented)", subtitle: "Performance management portal" },
                { title: "Oracle EDA", url: "[https://example.com/oracle](https://example.com/oracle)", subtitle: "Financials & HR dashboard" },
                { title: "MyVRS", url: "[https://example.com/myvrs](https://example.com/myvrs)", subtitle: "Retirement benefits dashboard" },
                { title: "MissionSquare Retirement", url: "[https://example.com/missionsquare](https://example.com/missionsquare)", subtitle: "Retirement asset manager" }
            ]
        }
    ],
    schedule: [
        {
            day: "Monday",
            classes: [
                { time: "09:00 AM - 10:30 AM", course: "CS 101: Intro to Programming", room: "Tech Hall 203", type: "Lecture" },
                { time: "11:00 AM - 12:30 PM", course: "CS 302: Database Architectures", room: "Science Block 4B", type: "Lecture" },
                { time: "02:00 PM - 03:30 PM", course: "Office Hours", room: "Faculty Suite 12", type: "Office Hours" }
            ]
        },
        {
            day: "Tuesday",
            classes: [
                { time: "10:00 AM - 11:30 AM", course: "CS 101: Lab Section A", room: "Lab A, Annex", type: "Lab" },
                { time: "01:00 PM - 02:30 PM", course: "Department Seminar", room: "Main Auditorium", type: "Meeting" }
            ]
        },
        {
            day: "Wednesday",
            classes: [
                { time: "09:00 AM - 10:30 AM", course: "CS 101: Intro to Programming", room: "Tech Hall 203", type: "Lecture" },
                { time: "11:00 AM - 12:30 PM", course: "CS 302: Database Architectures", room: "Science Block 4B", type: "Lecture" },
                { time: "03:00 PM - 05:00 PM", course: "CS 499: Senior Capstones", room: "Design Studio", type: "Seminar" }
            ]
        },
        {
            day: "Thursday",
            classes: [
                { time: "10:00 AM - 11:30 AM", course: "CS 101: Lab Section B", room: "Lab A, Annex", type: "Lab" },
                { time: "02:00 PM - 03:30 PM", course: "Office Hours", room: "Faculty Suite 12", type: "Office Hours" }
            ]
        },
        {
            day: "Friday",
            classes: [
                { time: "09:00 AM - 11:00 AM", course: "Research & Development Block", room: "Office Studio", type: "Research" },
                { time: "01:00 PM - 02:30 PM", course: "Curriculum Planning", room: "Virtual Meet", type: "Meeting" }
            ]
        }
    ]
};

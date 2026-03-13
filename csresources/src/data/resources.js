const resources = [
    {
        category: "Learning Resources (all-in-one)" , id: "learning",
        items: [
            {
                name: "Geeks for Geeks",
                url: "https://www.geeksforgeeks.org/",
                description: "Wide variety of topics, tutorials, interview prep and practice problems",
                note: "certificates must be purchased"
            },
            {
                name: "W3Schools",
                url: "https://www.w3schools.com/",
                description: "Great for beginners with tons of tutorials, references, and exercises"
            }
        ]
    },
    {
        category: "Courses & Certifications", id: "courses",
        items : [
            {
                name: "Full Stack open",
                url: "https://fullstackopen.com/en/",
                description: "Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js."
            },
            {
                name: "Great Learning Academy",
                url: "https://www.mygreatlearning.com/academy",
                description: "Learn about IT & Software, ChatGPT & Gen AI, Cyber Security, Machine Learning, Cloud Computing, and more. Master in-demand skils and tools and test your skills with quizzes."
            },
            {
                name: "Free Code Camp",
                url: "https://www.freecodecamp.org/learn",
                description: "Curriculum includes Responsive Web Design, Javascript, Front-End Development Libraries, Python, Relational Databases, Back-End Development & APIs, and more."
            },
            {
                name: "Cisco Networking Academy",
                url: "https://www.netacad.com/",
                description:"Topics include Cybersecurity, Networking, IT, and Python."
            },
            {
                name:"Code Signal",
                url: "https://codesignal.com/learn/course-paths",
                description:"Learning paths include Generative AI, AI & Machine Learning, Interview Prep and Data Science & Engineering."
            },
            {
                name: "MOOC - DevOps w/ Kubernetes",
                url:"https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes",
                description: "Learn how to create and run a Kubernetes cluster locally using k3d, and deploy applications to Kubernetes using deployments, services, ingress, and gateway resources."
            },
            {
                name: "MOOC- DevOps w/ Docker",
                url:"https://courses.mooc.fi/org/uh-cs/courses/devops-with-docker",
                description: "Learn the basics of containerization with Docker and relevant concepts such as image and volume."
            },
            {
                name: "Hacker Rank",
                url:"https://www.hackerrank.com/dashboard",
                description: "Interview Prep & Certification Test (w/o learning) for languages like Angular, C#, Go and more."
            },
            {
                name: "The Odin Project",
                url: "https://www.theodinproject.com/",
                description: "Full Stack web dev curriculum using project-based learning."
            }
        ]
    },

    {
        category: "Roadmaps" , id: "roadmaps",
        items : [
            {
                name: "Roadmap",
                url: "https://roadmap.sh/",
                description: "Roadmaps to help guide developers in picking up a path and guide their learning."
            },
            {
                name: "Neet Code",
                url: "https://neetcode.io/",
                description: "Tech Interview roadmap with video explanantions."
            }
        ]
    },

    {
        category: "Coding Practice", id: "coding_practice",
        items: [
            {
                name: "Leet Code",
                url:"https://leetcode.com/",
                description: "Enhance coding skills, and expand knowdledge and prepare for technical interviews.",
                note: "most commonly used"

            },
            {
                name: "Coddy",
                url:"https://coddy.tech/",
                description: "Hands-on learning for different coding languages with instant feedback."

            },
            {
                name: "Code Chef",
                url:"https://www.codechef.com/practice#programming-languages",
                description: "Practice languages like C++, Python, Java, HTML/CSS, and more.",
                note: "also have career path based learning and course modules"

            },
            {
                name: "PY Native",
                url:"https://pynative.com/",
                description: "Learn and practice Python with over 150+ tutorials, 20+ exercises, and 13+ quizzes."

            },
            {
                name: "Codeforces",
                url:"https://codeforces.com/",
                description: "Competitive programming problems, regular contests and community discussions.",
                note: "not beginner-friendly"

            },
            {
                name: "Codewars",
                url: "https://www.codewars.com/",
                description: "Gamified learning experience  and community-created challenges.",
            },
            {
                name: "Exercism",
                url: "https://exercism.org/",
                description: "81 programming languages with a blend of learning, practice, and mentoring."
            },
            {
                name: "Sphere Online Judge (SPOJ)",
                url:"https://www.spoj.com/",
                description: "Vast collection of collection coding problems mainly targeted towards experience programmers"
                
            }
        ]

    },
    {
        category: "Course Specific Tools", id: "course_tools",
        items: [
            {
                name: "CS310 - VisuAlgo",
                url:"https://visualgo.net/en",
                description: "Visual representation of data structures and algorithms."
            },
            {
                name: "CS420 - Coq Tactics CheatSheet",
                url:"https://www.cs.cornell.edu/courses/cs3110/2018sp/a5/coq-tactics-cheatsheet.html#apply",
                description: "List of Coq Tactics and 1-2 examples of using them."
            },
            {
                name: "CS420 - Web Based Coq Prover",
                url:"https://coq.vercel.app/scratchpad.html",
                description: "Browser-based Coq proof scratchpad."
            },
            {
                name: "CS444 - Operating Systems: Three Easy Pieces",
                url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
                description: "Free online operating system book with each chapter being <20 (most are 10-14) pages and coding examples"
            }
        ]
        
    },

    {
        category: "AI tools", id: "ai",
        items : [
            {
                name: "Claude Code",
                url: "https://claude.com/product/claude-code",
                description: "Specifically made for developers and used in industry."
            },
            {
                name: "Cursor",
                url: "https://cursor.com/",
                description: "AI-powered code editor"
            },
            {
                name: "Github Copilot",
                url: "https://github.com/features/copilot",
                description: "AI code completion with option to choose from leading LLMs"
            }
        ]
    },

    {
        category: "Libraries & Frameworks", id: "libraries",
        items: [
            {
                name: "Tensor Flow",
                url:"https://www.tensorflow.org/",
                description: "Open-source ML learning library developed by Google.  Used for building, training, and deploying ML models across various platforms."
            },
            {
                name: "React",
                url: "https://react.dev/",
                description: "Front-end JS library for web and native user interfaces. Allows you to create resuable UI components."
            },
            {
                name: "Angular",
                url: "https://angular.dev/",
                description: "TypeScript-based framework ideal for large-scale applications."

            },
            {
                name: "Vue",
                url: "https://vuejs.org/",
                description: "JS framework for building interactive UIs."

            },
            {
                name: "Django",
                url: "https://www.djangoproject.com/",
                description: "Python framework for secure web applications."

            },
            {
                name: "Next.js",
                url:"https://nextjs.org/",
                description: "React framework for building fast and production-ready web applications. Contains features like Server-Side Rendering (SSR), Static Site Generation (SGI) and more."
            },
            {
                name: "Spring Boot",
                url: "https://spring.io/",
                description: "java-based framework for Spring applications that provides a product-ready environment.",
                note: "supports stand-alone applications"
            }
            
        ]
    },
    {
        category: "API Dev & Testing Tools", id: "devtools",
        items: [
            {
                name: "Swagger",
                url: "https://swagger.io/",
                description: "Helps document and design RESTful APIs."

            },
            {
                name: "Postman",
                url: "https://www.postman.com/",
                description: "API testing tool with automation capabilities"

            }

        ]
    },
    {
        category: "Other tools", id: "other",
        items: [
            {
                name: "GDB - Online Debugger",
                url:"https://www.onlinegdb.com/",
                description: "Supports multiple languages."
            },
            {
                name: "ESP Tool",
                url:"https://espressif.github.io/esptool-js/",
                description: "A serial flasher utility for Espressif chips"
            }
        ]
    },
    {
        category: "Questions & Suggestions", id: "contact",
        items: [
            {
                name: "Contact",
                url: "mailto:jenna.hayek001@umb.edu",
                description: "Feel free to contact me at jenna.hayek001@umb.edu | discord @jennahayek"
            }
        ]

    }
]

export default resources;
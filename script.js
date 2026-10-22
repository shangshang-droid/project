
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kirresha Ampong | Portfolio</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background: #0e0d12;
            color: #f5f0e8;
            font-family: Arial, sans-serif;
            line-height: 1.7;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 22px 8%;
            border-bottom: 1px solid #302b37;
            gap: 20px;
        }

        .logo {
            color: #f5f0e8;
            font-weight: bold;
            text-decoration: none;
        }

        nav {
            display: flex;
            gap: 25px;
        }

        nav a {
            color: #d5cedd;
            text-decoration: none;
            font-size: 14px;
        }

        nav a:hover {
            color: #e6c77e;
        }

        .talk-button,
        .back-button,
        .project-button {
            display: inline-block;
            border: 1px solid #c8a45d;
            color: #e6c77e;
            padding: 9px 18px;
            border-radius: 30px;
            text-decoration: none;
            transition: 0.3s;
        }

        .talk-button:hover,
        .back-button:hover,
        .project-button:hover {
            background: #c8a45d;
            color: #0e0d12;
        }

        .hero {
            padding: 100px 12% 70px;
            background: radial-gradient(
                circle at 80% 20%,
                #302044,
                #0e0d12 55%
            );
        }

        .label {
            color: #d8b96e;
            font-size: 11px;
            letter-spacing: 2px;
            font-weight: bold;
        }

        h1 {
            font-size: clamp(45px, 8vw, 85px);
            line-height: 1.05;
            letter-spacing: -2px;
            margin: 25px 0;
        }

        .intro {
            max-width: 600px;
            color: #c6bfcd;
            font-size: 18px;
        }

        .details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 55px;
            padding-top: 25px;
            border-top: 1px solid #39313f;
        }

        .details h3 {
            font-size: 16px;
            margin-top: 8px;
            font-weight: normal;
        }

        section {
            scroll-margin-top: 25px;
        }

        .case-study {
            padding: 70px 8%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .study-card {
            padding: 28px;
            border: 1px solid #39313f;
            background: #17151d;
            border-radius: 8px;
        }

        .study-card h2 {
            font-size: 23px;
            line-height: 1.3;
            margin: 20px 0 15px;
        }

        .study-card p:last-child {
            color: #b9b1c2;
            font-size: 14px;
        }

        .solution {
            background: #241b30;
            border-color: #6f5383;
        }

        .process {
            padding: 80px 12%;
            background: #17151d;
        }

        .process h2,
        .more-work h2 {
            font-size: clamp(35px, 5vw, 50px);
            margin: 10px 0 35px;
        }

        .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
        }

        .process-item {
            border-top: 1px solid #514258;
            padding-top: 20px;
        }

        .process-item span {
            color: #d8b96e;
        }

        .process-item h3 {
            font-size: 23px;
            margin: 12px 0;
        }

        .process-item p {
            color: #b9b1c2;
            font-size: 14px;
        }

        .more-work {
            padding: 90px 12%;
            text-align: center;
        }

        .more-work p {
            color: #b9b1c2;
            margin-bottom: 25px;
        }

        footer {
            padding: 25px 8%;
            border-top: 1px solid #302b37;
            display: flex;
            justify-content: space-between;
            gap: 15px;
            color: #a9a1b1;
            font-size: 13px;
        }

        footer a {
            color: #e6c77e;
            text-decoration: none;
        }

        /* Mobile layout */
        @media (max-width: 800px) {
            header {
                flex-wrap: wrap;
            }

            .case-study {
                grid-template-columns: 1fr;
            }

            .process-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .hero {
                padding: 75px 8% 50px;
            }
        }

        @media (max-width: 500px) {
            header {
                justify-content: center;
            }

            nav {
                width: 100%;
                justify-content: center;
                gap: 18px;
            }

            .details,
            .process-grid {
                grid-template-columns: 1fr;
            }

            .process,
            .more-work {
                padding: 60px 8%;
            }

            footer {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    </style>
</head>

<body>

    <header>
        <a href="#home" class="logo">Kirresha Ampong</a>

        <nav>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" class="talk-button">Let's talk ↗</a>
    </header>

    <main>
        <section class="hero" id="home">
            <p class="label">UI · PROTOTYPE · FIGMA.</p>

            <h1>PORTFOLIO<br>WEB DESIGN</h1>

            <p class="intro">
                I designed my own portfolio as a beginner to learn
                layout, color and prototyping in Figma.
            </p>

            <div class="details">
                <div>
                    <p class="label">ROLE</p>
                    <h3>Web designer</h3>
                </div>

                <div>
                    <p class="label">TIMELINE</p>
                    <h3>2 weeks</h3>
                </div>

                <div>
                    <p class="label">TOOLS</p>
                    <h3>Figma</h3>
                </div>
            </div>
        </section>

        <section class="case-study" id="about">
            <div class="study-card">
                <p class="label">THE PROBLEM</p>
                <h2>What was broken?</h2>
                <p>
                    As a beginner, I had no portfolio and no projects
                    to show yet, so I had no way to share my skills.
                </p>
            </div>

            <div class="study-card solution">
                <p class="label">THE SOLUTION</p>
                <h2>What did you do?</h2>
                <p>
                    I designed my own portfolio in Figma. I made five
                    pages, chose a purple, gold and black style, and
                    linked them into a clickable prototype.
                </p>
            </div>

            <div class="study-card">
                <p class="label">THE OUTCOME</p>
                <h2>What changed?</h2>
                <p>
                    I now have a portfolio design with a clickable
                    prototype, and I learned layout, color and prototyping.
                </p>
            </div>
        </section>

        <section class="process" id="work">
            <p class="label">MY WORKFLOW</p>
            <h2>Process</h2>

            <div class="process-grid">
                <div class="process-item">
                    <span>01</span>
                    <h3>Plan</h3>
                    <p>
                        I decided what pages and content my portfolio needs.
                    </p>
                </div>

                <div class="process-item">
                    <span>02</span>
                    <h3>Style</h3>
                    <p>
                        I chose the colors, fonts and layout.
                    </p>
                </div>

                <div class="process-item">
                    <span>03</span>
                    <h3>Design</h3>
                    <p>
                        I arranged the text and elements to create
                        a clear and consistent design.
                    </p>
                </div>

                <div class="process-item">
                    <span>04</span>
                    <h3>Prototype</h3>
                    <p>
                        I linked the pages so they work like a real site.
                    </p>
                </div>
            </div>
        </section>

        <section class="more-work" id="contact">
            <p class="label">NEXT STEP</p>
            <h2>Want to see more?</h2>

            <p>
                Thank you for viewing my first portfolio project.
            </p>

            <a href="#home" class="back-button">↑ Back to top</a>

            <p style="margin-top: 25px;">
                <a
                    href="https://www.figma.com/design/1N0aInC5nyZcGbzsL1obg7/Web-Design-Portfolio"
                    target="_blank"
                    class="project-button"
                >
                    View my Figma design ↗
                </a>
            </p>
        </section>
    </main>

    <footer>
        <p>© <span id="year"></span> Kirresha Ampong</p>

        <a href="mailto:kirreshaampong@gmail.com">
            kirreshaampong@gmail.com
        </a>
    </footer>

    <script>
        // Automatically display the current year
        document.getElementById("year").textContent =
            new Date().getFullYear();

        // Smoothly scroll to sections when navigation links are clicked
        document.querySelectorAll('a[href^="#"]').forEach(function(link) {
            link.addEventListener("click", function(event) {
                const target = document.querySelector(
                    this.getAttribute("href")
                );

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });
    </script>

</body>
</html>

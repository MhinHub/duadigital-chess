<div align="center">
<img src="public/android-chrome-192x192.png" alt="logo" width="200" height="auto" />
  <h1>SCC Grand Prix Blitz</h1>
  <p>Chess Opening Visualization</p>
</div>
<br/>

## Project Overview
This project is a simple web app to visualize the most common chess openings. The data is fetched from [Chess.com](https://www.chess.com/) API.

I create this project to following technical test from [DuaDigital](https://duadigital.com/).

## Project Requirements

### Chart Component:
- Implementation: Utilize Chart.js for dynamic and interactive charts.
- Functionality: Implement a click feature on the chart to dynamically display various datasets.
- Responsiveness: Ensure the chart adjusts seamlessly across different devices.
- Openings Screen:
    - Display a bar chart representing the five most popular chess openings, identified by their ECO (Encyclopedia of Chess Openings) codes.
    - Example: For an ECO tag like "https://www.chess.com/openings/English-Opening-Anglo-Indian-Kings-Knight-Variation", the opening to display is "English Opening." Variations are not required for this project.
- Interaction:
    - Clicking on an opening redirects users to a results screen.
    - On this screen, a pie chart shows the distribution of outcomes (win for white, win for black, draw) specific to the selected opening.
    - The subtitle on the result screen dynamically updates to reflect the chosen opening.



## Project Techstack:
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Chart.js (React Chart 2)
- Zustand
- PWA


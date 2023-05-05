# Breaking
**Team members:** Richard Dong, Sarah Onderdonk, Grace Wan, Yabeke Zike

**Link to repo:** https://github.com/cs0320-s2023/break

**Time spent:** ~40 hours

**Project structure:**
- Broadly, the project is split into backend code (in the back folder) and frontend code (in the front folder).
    - back-end:
    - front-end:
      - documents: contains photos used by the Trainer page
      - src:
        - components: contains UI components used by our three pages
        - data: contains videos used by the Tutorials page
        - jsons: files that map moves to details about them (e.g. move names to descriptions, which is used by the Tutorials page)
        - styles: contains CSS files
        - App.tsx: render the application, which begins with the Landing page
        - Landing.tsx: a simple welcome page that allows users to navigate to one of the other two pages
        - Trainer.tsx: defines a page where users can generate and view new sequences
        - Tutorials.tsx: lists all moves along with descriptions and video demonstrations
      - tests: contains our frontend tests

**Design choices:**
- On the backend, we define Move, a custom object. Each Move object delineates the move's id, name, type, difficulty, and links (to other moves). See back/src/main/csv/rowobjects/Move.java for more details.
- MORE BACKEND DETAILS?
- Our application contains three pages: Landing, Tutorials, and Trainer. 
  - Landing: When launching the app, users are taken to the Landing page, where they can navigate to one of the other two pages.
  - Tutorials: Users can view short videos and descriptions of each move.
  - Trainer: Users can generate new sequences and view them here.

**Bugs/Limitations:**
- Our app was designed to be on a laptop. The UI may be unusable on mobile devices - this may be an area for further development.
- For a larger project, we may consider adding transitions in between moves on the Trainer page so that users can follow along/watch a sequence in its entirety.
- For ease of use, future iterations may choose to add more filters/sorting mechanisms (e.g. a difficulty option for generating sequences).

**Tests:**
- back/src/test contains backend tests
- front/src/test contains frontend tests
    - ui.test.tsx: tests that all pages render correctly and function as expected

**How to:**
- Run frontend tests: Run `npm test` in the `front` directory
- Run backend tests:
- Build and run the program:
    - Run the main() method in back/src/main/server/Server.java    
    - Navigate to the front directory.
        - Run `npm run dev`
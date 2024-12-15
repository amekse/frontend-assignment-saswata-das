
# SAASLab - Frontend Assignment

## Description
This project displays a list of highly-rated Kickstarter projects. It fetches project data from a web API, displays it in a paginated table, and includes accessibility and theming features (light and dark mode). The goal was to meet the assignment requirements with a clean and user-friendly UI.

## Live Demo
[URL](https://amekse.github.io/frontend-assignment-saswata-das)

Hosted at Github Pages.

## Assignment Requirements
The project was built to satisfy the following requirements:

1. Fetch details of highly-rated Kickstarter projects from a web API.
2. Display the following attributes in a table:
   - **S.No.**
   - **Percentage Funded**
   - **Amount Pledged**
3. Paginate the data with a maximum of 5 records per page.
4. Use raw CSS for styling (no CSS frameworks).
5. Host the project online and submit both the repository and hosted URL.
6. Implement accessibility and an aesthetically pleasing UI for extra points.

## Folder Structure
```
/src
    -- index.tsx
    -- index.css
    -- App.tsx
    -- App.css
    -- common.contexts.ts
    -- common.types.ts
    -- /componentsAndStyles
        -- parentContainer.component.tsx
        -- projectsList.component.tsx
        -- pagination.component.tsx
        -- loader.component.tsx
        -- accessibility.component.tsx
        -- common.style.ts
        -- common.styles.css
    -- /models
        -- projectList.model.ts
    -- /utilsAndServices
        -- api.service.ts
        -- common.utils.ts
    -- tests
        -- projectList.test.tsx
        -- projectListModel.test.ts
        -- dataForTest.constants.ts
```

## Testing
This project uses **React Testing Library** and **Jest** for unit testing. To run tests, use:

```bash
npm test
```

### Test Summary:
**Area:** Model
**Scenarios Covered:**
    -   **Valid Data:** Ensures proper conversion of API data to table-compatible UI data.
    -   **Invalid Page Numbers:** Tests boundary conditions for invalid page requests (e.g., `0`, `out-of-range`).
    -   **Malformed or Empty Data:** Ensures that the model handles bad or missing API data gracefully by returning empty results.
**Tools Used:** Jest

**Area:** Components
**Scenarios Covered:**
    -   **Context-Driven Rendering:** Confirms that components render appropriate data and styles based on provided contexts:
        -   **Theme Context (Light/Dark):** Validates dynamic theme application to UI elements.
        -   **Page Context:** Ensures proper data rendering for different pages.
    -   **UI Element Content:** Checks table data accuracy against the expected results for given inputs.
**Tools Used:** React Testing Library, Jest

## Technologies Used
- **React** (Frontend Framework)
- **TypeScript** (Static Typing)
- **Raw CSS** (Styling)
- **React Testing Library** (Testing)
- **Jest** (Unit Tests)

## Challenges and Improvements

### Challenges
- Implementing the Lazy and Suspense to the extent of asynchronous data fetching.

### Potential Improvements
- Add search and filter features to enhance usability.
- Optimize performance for large datasets.

## Author
**Saswata Das**
[Github](https://github.com/amekse)
[Linkedin](https://www.linkedin.com/in/swtdas/)

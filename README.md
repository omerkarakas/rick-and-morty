# Rick And Morty API Client App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Live Demo

See the app in action in [netlify](https://rickn-morty.netlify.app) or
in [mysite](https://rick-and-morty.okarakas.com)

---

## Explore the code and run

1. Clone or download the app source to a local folder.

2. In order to install all dependencies

```bash
npm install
```

3. Run the app using the following command

```bash
npm run start
```

4. Prepare build for a deployment

```bash
npm run build
```

Builds the app for production to the `build` folder.\

# Folders and Units

## public

Files, most importantly index.html.

## src

This folder is the root of our source tree.

### 1. src/**assets**

Static assets like logo and background images.

### 2. src/**components**

JS components used to build the app

- **Characters.js** :
  The component displaying the passed array type probe character "data" in a searcable/sortable table component. Used in the EpisodePage component as the "Seen Characters" list.

- **Episodes.js** :
  The component displaying the passed array type probe episodes "data" in a searcable/sortable table component. Used in the CharacterPage component as the "Seen in Episodes" list.

- **Navbar.js** :
  The component displayed at the top of all pages.

- **Spinner.js** :
  The component displayed during the API fetch.

- **\_.styles.js** : Styled components of \_.js

### 3. src/context/**context.js**

- the context provider **AppProvider** that wraps App component in index.js
- the context object **AppContext** that provides states and functions to other components:
  1. **loading** : a state to show the loading spinner
  2. **episodes** : All the episodes provided by the API (https://rickandmortyapi.com/api/episode), initialized in the fetchEpisodes function of useEffect hook which runs only in the loading phase of the context.
     This state includes fields from the API, besides
     - a field called **"character_ids"** which includes all character_id information separated by a comma. This is going to be used in "fetchCharacters" function.
     - a field called **"season"** which is derived from the episode field. Eg: "Season 3"
  3. **currentEpisodeId** : this state is listened with a useEffect hook to query all the characters playing in the corresponding episode by the function fetchCharacters.
  4. **seasons** : A set derived from the episodes data in fetchEpisodes function of the load only useEffect hook. Eg: Season 1, Season 2, ...
  5. **selectedSeason** : Helps to filter the episodes using the user's season selection. There is a hook to listen to this value, and re-set the selectedSeasonsEpisodes.
  6. **characters** : a state array fetched from [https://rickandmortyapi.com/api/character/_characterIds_](https://rickandmortyapi.com/api/character/1,2,3) address by fetchCharacters function where characterIds represents the characters' ids playing in the current episode which has been added to the episode information before.
  7. **fetchCharacters** : a function whose input is characters id array, and fetches corresponding characters. This function enriches the fetched character array by adding **"episode_ids"** field to each character object, which will be used later to fetch the episodes played the related character.

### 4. src/**pages**

Any component as a page that can be routed through the app.

- **AboutPage.js**: A simple about page.
- **CharacterPage.js**:
  Page listing the details of a character represented by its id as parameter.

  1.  **character** : state of character object filtered from _characters_ array from the context.
  2.  **charactersEpisodes** : state of array of episodes that the _character_ has a role which is set as a result of the function _fetchCharactersEpisodes_ call.
  3.  This page uses "Episodes" component to list _charactersEpisodes_, the episodes where "character" is seen in.

- **EpisodePage.js** :
  Page listing the details of an episode represented by its id as parameter.

  1.  **episode** : state of episode object filtered from _episodes_ array from the context.
  2.  This page uses "Characters" component to list _characters_, the characters seen in this episode.

- **HomePage.js** :
- **\_.styles.scss** : SAAS styling for the page component of \_.js

### 5. src/**App.js**

Routes the requests to any of the page components listed above, based on the path parameter.

### 6. src/**index.css**

Application-wide styling rules listed here.

### 7. src/**index.js**

Starting point of the application, where mounting the root component including App component to DOM.

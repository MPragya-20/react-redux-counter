Clone the repository,
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Explanation

I created a folder named redux and created 3 files in it:

![image](https://user-images.githubusercontent.com/68287824/177209039-26929082-5f91-4231-99fb-aa2ed7078a78.png)

This is the folder structure.
The mainFile.js inside component folder is for the UI.

![image](https://user-images.githubusercontent.com/68287824/177209232-56d9dbda-42b0-46c7-b01a-c8f4f175e18c.png)

Now in the types.js file, I declared the constants corresponding to the actions to be performed.

`export const INCREMENT = "INCREMENT";`

`export const DECREMENT = "DECREMENT";`

In reducer.js file I declared a function to be carried out on respective actions using switch cases along with initial state.

In actions.js, the type and payload corresponsing to action type is declared as functions.

In index.js, the mother component, I created the store and `Provide` d the store to App component, which in turn is accessed by mainFile as props.

Then bind the state and dispatch to mainFile using `connect`.




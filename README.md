# Exploring Hogs with Props and State

In this program, we have three components: `App`, `MasterHog`, and `BabyHog`.

###### `MasterHog`:

- Has an eye color that can change via a radio button on the DOM
- Renders three `BabyHog`s, which inherit its eye color
- Owns the non-variable data associated with each `BabyHog` via the `offspring` import. This includes their: name, eye color, and hobby. _(Obviously, `MasterHog` gets to name her babies, and they genetically inherit her eye color. Not obviously, `MasterHog` also gets to determine her babies hobbies)_

###### `BabyHog`:

- Has an eye color received from its parent
- Has a hobby assigned by its parent
- Has a name given by its parent
- Has a variable weight, that can be changed via buttons


**Note:** While the `MasterHog` component can change its own eye color via radio buttons, its children can only inherit the eye color of their parent!


## Directions:

- Understanding the data associated with both the `MasterHog` as well as the `BabyHog` components, _plan out_ what data should be kept as state vs. props in each component
- Make use of the `src/db.js` file (import it!). Don't forget: arrays can be mapped and return JSX!
- Depending on the `BabyHog` eye color, a different image should be rendered (several are being imported in the `BabyHog` component)
- While the `changeWeight` method has been implemented in `BabyHog`, it is not 'hooked up' to our component. Make sure the function is invoked so our hogs can grow and shrink when either of the button's are clicked

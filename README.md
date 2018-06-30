# Hog-Props-Intro

In this program, we have three components: `App`, the `MasterHog`, and the
`BabyHog`. Your job is to display the `MasterHog` with its name, weight, and eye
color.

In addition, you are to display its three `BabyHog` components with their name,
weight, and eye color. 

The `MasterHog` should pass down it's beauteous eye color gene to the `BabyHog`
components. While a `BabyHog`'s eye color comes from the `MasterHog`, a
`BabyHog` should be able to change its weight independently.

Additionally, the `MasterHog` should be able to change its eye color, because
Hogs exhibit absolute genetic transfer, the `MasterHog`'s eye color should
determine its children's eye color. 

Hint: the `App` component already imports the data for the `BabyHog` components.
You need simply to pass it down as props to the next component in your program
until you can use it to make BabyHogs.

## Directions:
  * Pass the necessary props to the `BabyHog` components
  * Use the radio buttons provided to alter the eye color the `MasterHog` component
  * Render the `BabyHog` components and their images based on the eye color of the `MasterHog`
  * Use state in the `BabyHog` component to change their image heights (a good starting image height is '200px' and 10 is a good amount to increment/decrement by)

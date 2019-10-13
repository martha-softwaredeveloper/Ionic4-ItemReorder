# Ionic 4 - Tab Bar

I followed the tutorial of Joshua Morony: [[IONIC 4] Reordering List Items #ionic #angular](https://youtu.be/8kZTK32PuIg)

<img src="https://github.com/martha-softwaredeveloper/Ionic4-ItemReorder/blob/master/src/assets/Screen-shot.png" width="500"/>

## App Configuration

1. Have a list that's display in home page
2. It has a save button that prints the array to the console.

## Set Reorder component

1. At home.page.html, surround items list with ion-reorder group  and add disabled attribute to false --> code lines: 12 + 17
2. At home.page.html, add ion-reorder element to drag items --> code lines: 15
 
## Save the underline data structure after reorder

1. At home.page.html, to listen for events add new event to reorder group --> code lines: 12
2. At home.page.ts, create new function to handle event and view the event property detail in the console by printing the event --> code lines: 24
3. At home.page.ts, use splice to update the order of the items in the array and the display in the home page --> code lines: 25 - 27

## Author

Joshua Morony
Overview: 
============

This is a POC project based on a Subway Theme which has adding and deleting of menu items & adding recipes to shopping cart.
Below are the components used: 
UI: HTML5, Bootstrap with CSS3.
Scripting Language: Angular6.

Technical Solution: 
============

- Components are segregated for each UI section with modularity and cohesion in mind, loosely coupled to extend functionalities easily.
- A common modal class is used to store data which is common to all components.
- Observables are used to pass data between components, where the source data is present in the service and subscribes to all components listening to that model.
- A service class is present where all the business logic is present and connectivity between components.
- Input & output decorators are used to pass data to components and to render output from them.
- Angular routes are used to navigate through menu items and components.


Functional Specifications: 
============

User can do the below functionalites - 
- Select “Meal Type” either “Veg” Or “Non-Veg”, correspondingly the respective menu’s will load
- Select one “Bread Type”.
- Select multiple “Sauce Type” which is a multi-select checkbox.
- Select any menu item and the respective details will pop-up in the right column.
- Select Manage/Edit/Delete Recipe 
- Edit Recipe will populate the details into a form where user can modify description. Images can be provided as URL’s.
- New Menu Item button will load a new form where user can add details, add image as URL, add ingredients and save to reflect it back to the list of menu items.
- User can add items to shopping cart.
- In Shopping cart, user can delete items and can also see all the details of his selection. 

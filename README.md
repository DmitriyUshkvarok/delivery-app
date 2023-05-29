Food Delivery App This application is a food delivery system with two main
pages: the order page and the cart page.

Order Page The order page features a header with navigation and an animated
logo. It also includes a cart icon, which users can click to navigate to the
cart page. The cart icon dynamically displays the actual number of items in the
cart.

The order page contains a form with 4 fields: name, email, phone, and address.
Each product card displays an image, name, and price. Each card also has an "Add
to Cart" button, which, upon clicking, adds the product to the cart. A
successful addition changes the icon and updates the counter to reflect the
selected quantity. If no quantity is selected, placing an order is not possible.

The state of the add-to-cart icon and the selected quantity counter are stored
in the local storage.

Restaurant Selection Filter The application includes a restaurant selection
filter, allowing users to choose a specific restaurant when ordering food. The
filter enables users to browse and select from a list of available restaurants.

Choose Entire List of Items In addition to the restaurant selection filter, the
application provides a convenient button that allows users to choose the entire
list of items from popular fast-food chains. The available options include:

McDonald's KFC (Kentucky Fried Chicken) Burger King Domino's Pizza By clicking
on the respective button, users can add the complete list of items from the
chosen restaurant to their cart, making it easier to order a variety of products
in one go.

Cart Page The cart page displays cards with the selected items added by the
user. Each card includes customer information entered during the order process,
as well as the product name, price, and total quantity. If there are multiple
instances of the same product in the order (e.g., two pizzas or three
Coca-Colas), they are displayed individually.

The cart page also features a "Back" button, which takes the user back to the
previous page. Clicking on the logo redirects the user to the order page. Each
card in the cart has a "Remove from Order" button.

Asynchronous Requests and Data Storage The application implements asynchronous
requests with individual loaders. Loaders are triggered when the page is
reloaded, during collection rendering, and when items are removed or added.

The product collection is rendered from a custom JSON file and stored in the
Firestore database using the Firebase library.

Order Date and Time The cart page displays the date and time of each order in
the order cards.

Footer and Contact Information The application includes a footer section that
provides complete contact information about the developer. Here are the
available contact methods:

GitHub: https://github.com/DmitriyUshkvarok LinkedIn:
https://www.linkedin.com/in/dmitriy-ushkvarok/
Telegram:https://t.me/Dmitriy_Ushkvarok Facebook:
https://www.facebook.com/profile.php?id=100033147623156 Instagram:
https://www.instagram.com/dmitriy_ushkvarok/ WhatsApp:https://wa.me/80957453646
Email: dmitriy.ushkvarok@gmail.comFeel free to reach out to the developer
through any of these platforms for any questions or inquiries related to the
application.

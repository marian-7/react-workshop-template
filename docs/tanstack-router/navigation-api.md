# Navigation API

With relative navigation and all the interfaces in mind now, let's talk about the different flavors of navigation API at your disposal:

## The \<Link\> component

- Generates an actual \<a\> tag with a valid href which can be clicked or even cmd/ctrl + clicked to open in a new tab

---

## The useNavigate() hook

- When possible, Link component should be used for navigation, but sometimes you need to navigate imperatively as a result of a side-effect. useNavigate returns a function that can be called to perform an immediate client-side navigation.

---

## The <Navigate> component

- Renders nothing and performs an immediate client-side navigation.

---

## The Router.navigate() method

- This is the most powerful navigation API in TanStack Router. Similar to useNavigate, it imperatively navigates, but is available everywhere you have access to your router.

---

⚠️ None of these APIs are a replacement for server-side redirects. If you need to redirect a user immediately from one route to another before mounting your application, use a server-side redirect instead of a client-side navigation.
# TanStack Router Naming Conventions

## __root.tsx

- The root route file must be named __root.tsx and must be placed in the root of the configured routesDirectory.

---

## . separator

- Routes can use the . character to denote a nested route. For example, blog.post will be generated as a child of blog.

---

## $ token

- Routes segments with the $ token are parameterized and will extract the value from the URL pathname as a route param.

---

## _ prefix

- Routes segments with the _ prefix are considered layout-routes and will not be used when matching its child routes against the URL pathname.

---

## _ suffix

- Routes segments with the _ suffix exclude the route from being nested under any parent routes.

---

## (folder) folder name pattern:

- A folder that matches this pattern is treated as a route group which prevents this folder to be included in the route's URL path.

---

## index token

- Routes segments ending with the index token (but before any file types) will be used to match the parent route when the URL pathname matches the parent route exactly.

---

## .route.tsx File Type

- When using directories to organize your routes, the route suffix can be used to create a route file at the directory's path. For example, blog.post.route.tsx or blog/post/route.tsx can be used at the route file for the /blog/post route.

---

## .lazy.tsx File Type

- The lazy suffix can be used to code-split components for a route. For example, blog.post.lazy.tsx will be used as the component for the blog.post route.

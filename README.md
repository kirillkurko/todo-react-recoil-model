# React Recoil Model Approach

The idea of this project is to show the common way of creating business logic in React applications.

State Management is of the pain points of React - we have useState and Contexts, but these mechanisms 
do not work for large applications. That's why we have libraries like Redux or MobX. Do they really solve all the problems? 
No. They even bring new questions (and sometimes without do not answer at them). 
To make it more convenient we have a bunch of tools like Redux Saga, Redux Toolkit, MobX State Tree and other.
And we even have more state managers - Recoil, Jotai Atoms, Effector, Rematch and more. 

But what I see in the most of the projects is that code becomes even worse with the usage of all these
tools and libraries. Business logic is coupled with specific tools, React Components loaded by usage 
of useDispatch and other library-specific methods.

Model Approach is designed to solve these problems separating business logic and components and decoupling 
State Managers and React defining a simple contact between them using hooks. This approach will work
for whatever library you will use, and it also makes it possible to migrate from one solution to 
another without changes in your components.

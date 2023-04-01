import React from 'react';

const Blog = () => {
    return (
        <section className='h-screen flex items-center justify-center'>

            <div className=' grid lg:grid-cols-3 gap-20 md:grid-cols-2 sm:grid-cols-1'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title bg-gray-300 border rounded-2xl">What is the purpose of the React Router?</h2>
                        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title  bg-gray-300 border rounded-2xl">How does context API works?</h2>
                        <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                            <br />
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title bg-gray-300 border rounded-2xl">What is useRef hook in React? How does useRef React work?</h2>
                        <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                            <br />
                            useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
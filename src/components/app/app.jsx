import React, { useState } from 'react';
import styles from "./app.module.scss";

const Button = (props) => {
    return (
        <button>{props.children}</button>
    )
};

const App = (e) => {

    return (
        <Button>1</Button>
    );
}
 
export default App;

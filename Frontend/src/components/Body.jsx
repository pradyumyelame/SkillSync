import React from "react";
// import { Link } from 'react-router-dom';
import Editor from "./Editor";
// import ResumeForm  from "./ResumeForm";
import styles from "./Body.module.css";
// import Front from "./Front";

function Body () {


    return (
        <>
            {/* <div className={styles.header}>
                <Link to="/Custom">Go to Custom Route</Link>
            </div> */}
            <div className={styles.container}>
                <Editor/>
                <div className={styles.template}>
                {/* <ResumeForm/> */}
                </div>
            </div>
        </>
    );
};

export default Body;
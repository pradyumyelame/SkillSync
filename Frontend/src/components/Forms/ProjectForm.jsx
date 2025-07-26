// ProjectForm.jsx

import React, { useState,useEffect } from 'react';
import styles from "./ProjectForm.module.css";

const ProjectForm = ({ onSave, data }) => {
    const [project, setProject] = useState(data || {
        title: '',
        date: '',
        deployedLink: '',
        description1: '',
        description2: '',
        description3: '',
        description4: ''
    });

    useEffect(() => {
        if (data) {
            setProject(data);
        }
    }, [data]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(project);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div className={styles.item1}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Title:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="title"
                            value={project.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item2}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="date"
                            value={project.date}
                            onChange={handleChange}
                            placeholder="mm-yyyy"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item3}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Deployed Link:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="deployedLink"
                            value={project.deployedLink}
                            onChange={handleChange}
                            placeholder="Enter deployed link"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item4}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 1:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description1"
                            value={project.description1}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item5}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 2:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description2"
                            value={project.description2}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item6}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 3:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description3"
                            value={project.description3}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item7}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 4:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description4"
                            value={project.description4}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
            </div>
            <button className={styles.btn} type="submit">Save</button>
        </form>
    );
};

export default ProjectForm;

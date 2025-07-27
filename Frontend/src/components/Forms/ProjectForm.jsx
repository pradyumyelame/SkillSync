import React, { useState, useEffect } from 'react';
import styles from "./ProjectForm.module.css";

const ProjectForm = ({ onSave, data }) => {
    // The state now holds an array of projects
    const [projects, setProjects] = useState(Array.isArray(data) ? data : []);

    useEffect(() => {
        // This effect ensures the form initializes correctly, even if data is empty.
        const initialData = Array.isArray(data) && data.length > 0 ? data : [{
            title: '', date: '', link: '',
            description1: '', description2: '', description3: '', description4: ''
        }];
        setProjects(initialData);
    }, [data]);

    // Handle changes for a specific project entry by its index
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedProjects = [...projects];
        updatedProjects[index][name] = value;
        setProjects(updatedProjects);
    };

    // Add a new, blank project form
    const handleAddProject = () => {
        setProjects([
            ...projects,
            {
                title: '', date: '', link: '',
                description1: '', description2: '', description3: '', description4: ''
            }
        ]);
    };

    // Remove a project form by its index
    const handleRemoveProject = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    // Save the entire array of projects
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(projects);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Array.isArray(projects) && projects.map((proj, index) => (
                <div key={index} className={styles.projectEntry}>
                    <div className={styles.row}>
                        {/* Title */}
                        <div className={styles.item1}>
                            <label className={styles.label}>Title:</label>
                            <input
                                className={styles.input} type="text" name="title"
                                value={proj.title} onChange={(e) => handleChange(e, index)}
                                placeholder="e.g., E-commerce Website" required
                            />
                        </div>
                        {/* Date */}
                        <div className={styles.item2}>
                            <label className={styles.label}>Date:</label>
                            <input
                                className={styles.input} type="date" name="date"
                                value={proj.date} onChange={(e) => handleChange(e, index)}
                                required
                            />
                        </div>
                        {/* Deployed Link */}
                        <div className={styles.item3}>
                            <label className={styles.label}>Project Link: (optional)</label>
                            <input
                                className={styles.input} type="text" name="link"
                                value={proj.link} onChange={(e) => handleChange(e, index)}
                                placeholder="https://example.com"
                            />
                        </div>
                        {/* Descriptions */}
                        <div className={styles.item4}>
                            <label className={styles.label}>Description 1:</label>
                            <input
                                className={styles.input} type="text" name="description1"
                                value={proj.description1} onChange={(e) => handleChange(e, index)}
                                placeholder="Feature or technology used"
                            />
                        </div>
                        <div className={styles.item5}>
                            <label className={styles.label}>Description 2:</label>
                            <input
                                className={styles.input} type="text" name="description2"
                                value={proj.description2} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div className={styles.item6}>
                            <label className={styles.label}>Description 3:</label>
                            <input
                                className={styles.input} type="text" name="description3"
                                value={proj.description3} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        <div className={styles.item7}>
                            <label className={styles.label}>Description 4:</label>
                            <input
                                className={styles.input} type="text" name="description4"
                                value={proj.description4} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                    </div>
                    {projects.length > 1 && (
                        <button type="button" onClick={() => handleRemoveProject(index)} className={styles.removeBtn}>
                            Remove
                        </button>
                    )}
                </div>
            ))}
            
            <div className={styles.actions}>
                <button type="button" onClick={handleAddProject} className={styles.addBtn}>
                    Add New Project
                </button>
                <button className={styles.btn} type="submit">Save All Projects</button>
            </div>
        </form>
    );
};

export default ProjectForm;

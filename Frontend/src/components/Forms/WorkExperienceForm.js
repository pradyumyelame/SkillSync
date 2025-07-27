import React, { useState, useEffect } from 'react';
import styles from "./WorkExperienceForm.module.css";

const WorkExperienceForm = ({ onSave, data }) => {
    // FIX: Ensure the initial state is always an array.
    const [experiences, setExperiences] = useState(Array.isArray(data) ? data : []);

    useEffect(() => {
        // This effect ensures the form initializes correctly, even if data is empty.
        const initialData = Array.isArray(data) && data.length > 0 ? data : [{
            title: '', company: '', location: '', startDate: '', endDate: '',
            description1: '', description2: '', description3: '', description4: ''
        }];
        setExperiences(initialData);
    }, [data]);

    // Handle changes for a specific experience entry by its index
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperiences = [...experiences];
        updatedExperiences[index][name] = value;
        setExperiences(updatedExperiences);
    };

    // Add a new, blank experience form
    const handleAddExperience = () => {
        setExperiences([
            ...experiences,
            {
                title: '', company: '', location: '', startDate: '', endDate: '',
                description1: '', description2: '', description3: '', description4: ''
            }
        ]);
    };

    // Remove an experience form by its index
    const handleRemoveExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    // Save the entire array of experiences
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(experiences);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* FIX: Add a check to ensure experiences is an array before mapping */}
            {Array.isArray(experiences) && experiences.map((exp, index) => (
                <div key={index} className={styles.experienceEntry}>
                    <div className={styles.detail3}>
                        {/* Title */}
                        <div className={styles.item1}>
                            <label className={styles.label}>Title:</label>
                            <input
                                className={styles.input} type="text" name="title"
                                value={exp.title} onChange={(e) => handleChange(e, index)}
                                placeholder="e.g. Frontend Developer" required
                            />
                        </div>
                        {/* Company Name */}
                        <div className={styles.item2}>
                            <label className={styles.label}>Company Name:</label>
                            <input
                                className={styles.input} type="text" name="company"
                                value={exp.company} onChange={(e) => handleChange(e, index)}
                                placeholder="e.g. Amazon" required
                            />
                        </div>
                        {/* Location */}
                        <div className={styles.item3}>
                            <label className={styles.label}>Location:</label>
                            <input
                                className={styles.input} type="text" name="location"
                                value={exp.location} onChange={(e) => handleChange(e, index)}
                                placeholder="e.g. Remote" required
                            />
                        </div>
                        {/* Start Date */}
                        <div className={styles.item4}>
                            <label className={styles.label}>Start Date:</label>
                            <input
                                className={styles.input} type="date" name="startDate"
                                value={exp.startDate} onChange={(e) => handleChange(e, index)}
                                required
                            />
                        </div>
                        {/* End Date */}
                        <div className={styles.item5}>
                            <label className={styles.label}>End Date: (optional)</label>
                            <input
                                className={styles.input} type="date" name="endDate"
                                value={exp.endDate} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                        {/* Descriptions */}
                        <div className={styles.item6}>
                            <label className={styles.label}>Description 1:</label>
                            <input
                                className={styles.input} type="text" name="description1"
                                value={exp.description1} onChange={(e) => handleChange(e, index)}
                                placeholder="Work responsibility or achievement"
                            />
                        </div>
                        <div className={styles.item7}>
                            <label className={styles.label}>Description 2:</label>
                            <input
                                className={styles.input} type="text" name="description2"
                                value={exp.description2} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                         <div className={styles.item8}>
                            <label className={styles.label}>Description 3:</label>
                            <input
                                className={styles.input} type="text" name="description3"
                                value={exp.description3} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                         <div className={styles.item9}>
                            <label className={styles.label}>Description 4:</label>
                            <input
                                className={styles.input} type="text" name="description4"
                                value={exp.description4} onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                    </div>
                    {experiences.length > 1 && (
                        <button type="button" onClick={() => handleRemoveExperience(index)} className={styles.removeBtn}>
                            Remove
                        </button>
                    )}
                </div>
            ))}
            
            <div className={styles.actions}>
                <button type="button" onClick={handleAddExperience} className={styles.addBtn}>
                    Add New Experience
                </button>
                <button className={styles.btn} type="submit">Save All Experiences</button>
            </div>
        </form>
    );
};

export default WorkExperienceForm;

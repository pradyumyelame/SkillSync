import React, { useState,useEffect } from 'react';
import styles from "./WorkExperienceForm.module.css";

const WorkExperienceForm = ({ onSave, data }) => {
    const [experience, setExperience] = useState(data || {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description1: '',
        description2: '',
        description3: '',
        description4: ''
    });

    useEffect(() => {
        if (data) {
            setExperience(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({
            ...experience,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(experience);
    };

    return (
       <form onSubmit={handleSubmit}>
      <div className={styles.detail3}>
                <div className={styles.item1}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Title:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="title"
                            value={experience.title}
                            onChange={handleChange}
                            placeholder="Enter title e.g. Frontend developer"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item2}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Company Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="company"
                            value={experience.company}
                            onChange={handleChange}
                            placeholder="Enter company name e.g. Amazon"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item3}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Location:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="location"
                            value={experience.location}
                            onChange={handleChange}
                            placeholder="Enter location e.g. Remote"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item4}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Start Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="startDate"
                            value={experience.startDate}
                            onChange={handleChange}
                            placeholder="mm-yyyy"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item5}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>End Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="endDate"
                            value={experience.endDate}
                            onChange={handleChange}
                            placeholder="mm-yyyy"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item6}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 1:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description1"
                            value={experience.description1}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item7}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 2:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description2"
                            value={experience.description2}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item8}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 3:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description3"
                            value={experience.description3}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                </div>
                <div className={styles.item9}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description 4:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="description4"
                            value={experience.description4}
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

export default WorkExperienceForm;

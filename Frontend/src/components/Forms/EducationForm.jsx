import React, { useState, useEffect } from 'react';
import styles from "./EducationForm.module.css";

const EducationForm = ({ onSave, data }) => {
    const [education, setEducation] = useState(data || {
        institute: '',
        discipline: '',
        year:'',
        grade:'',
    });

    useEffect(() => {
        if (data) {
            setEducation(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation({
            ...education,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(education);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className={styles.detail2}>
    <div className={styles.formGroup}>
        <label className={styles.label}>Institute:</label>
        <input
            className={styles.input}
            type="text"
            name="institute"
            value={education.institute}
            onChange={handleChange}
            placeholder="Enter institute name"
            required
        />
    </div>
    <div className={styles.formGroup}>
        <label className={styles.label}>Discipline:</label>
        <input
            className={styles.input}
            type="text"
            name="discipline"
            value={education.discipline}
            onChange={handleChange}
            placeholder="Enter discipline"
            required
        />
    </div>
    <div className={styles.row3}>
        <div className={styles.formGroup}>
            <label className={styles.label}>Passing Year:</label>
            <input
                className={styles.input}
                type="text"
                name="year"
                value={education.year}
                onChange={handleChange}
                placeholder="Enter passing year (yyyy)"
                required
            />
        </div>
        <div className={styles.formGroup}>
            <label className={styles.label}>Grade:</label>
            <input
                className={styles.input}
                type="text"
                name="grade"
                value={education.grade}
                onChange={handleChange}
                placeholder="Enter grade"
                required
            />
        </div>
    </div>
</div>


            
            <button className={styles.btn} type="submit">Save</button>
        </form>
    );
};

export default EducationForm;

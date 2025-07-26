// SkillForm.jsx

import React, { useState, useEffect } from 'react';
import styles from "./SkillForm.module.css";

const SkillForm = ({ onSave, data }) => {
    const [skills, setSkills] = useState(data);
    const [newSkill, setNewSkill] = useState('');

    const handleSkillChange = (e) => {
        setNewSkill(e.target.value);
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ skills: skills });
    };

    useEffect(() => {
        setSkills(data);
    }, [data]);

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2>Skills</h2>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newSkill}
                    onChange={handleSkillChange}
                    className={styles.input}
                    placeholder="Enter a new skill"
                />
                <button type='button' className={styles.btn} onClick={handleAddSkill}>Add</button>
            </div>
            <div className={styles.skillContainer}>
                {skills.map((skill, index) => (
                    <div className={styles.skillBox} key={index}>
                        <p className={styles.skillText}>{skill}</p>
                        <button onClick={() => handleRemoveSkill(index)} className={styles.btnDelete}>❌</button>
                    </div>
                ))}
            </div>
            <button type="submit" className={styles.btn}>Save</button>
        </form>
    );
};

export default SkillForm;

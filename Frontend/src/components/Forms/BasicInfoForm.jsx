import React, { useState, useEffect } from 'react';
import styles from "./BasicInfoForm.module.css";

const BasicInfoForm = ({ data, onSave }) => {
    const [formData, setFormData] = useState(data || {
        name: '',
        title: '',
        linkedin: '',
        github: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.detail}>
                <div className={`${styles.row} ${styles.item1}`}>
                    <div className={styles.field}>
                        <label className={styles.label}>Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                </div>
                <div className={`${styles.row} ${styles.item2}`}>
                    <div className={styles.field}>
                        <label className={styles.label}>Title</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter your title"
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label className={styles.label}>Linkedin Profile</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            placeholder="Enter your Linkedin profile link"
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Github Profile</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="github"
                            value={formData.github}
                            onChange={handleInputChange}
                            placeholder="Enter your Github profile link"
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label className={styles.label}>Email Id:</label>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Contact No</label>
                        <input
                            className={styles.input}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className={styles.savebtn}>
                <button className={styles.btn} type="submit">Save</button>
            </div>
        </form>
    );
};

export default BasicInfoForm;

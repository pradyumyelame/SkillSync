import React, { useState,useEffect } from 'react';
import styles from "./AchievementForm.module.css";

const AchievementForm = ({ onSave, data }) => {
    const [achievement, setAchievement] = useState(data || {
        achievement1: '',
        achievement2: '',
        achievement3: '',
        achievement4: ''
    });

    useEffect(() => {
        if (data) {
            setAchievement(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAchievement({
            ...achievement,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(achievement);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Achievement 1:</label>
                <input
                    type="text"
                    name="description1"
                    value={achievement.achievement1}
                    onChange={handleChange}
                    placeholder="Enter your achievement"
                />
            </div>
            <div>
                <label>Achievement 2:</label>
                <input
                    type="text"
                    name="description2"
                    value={achievement.achievement2}
                    onChange={handleChange}
                    placeholder="Enter your achievement"
                />
            </div>
            <div>
                <label>Achievement 3:</label>
                <input
                    type="text"
                    name="description3"
                    value={achievement.achievement3}
                    onChange={handleChange}
                    placeholder="Enter your achievement"
                />
            </div>
            <div>
                <label>Achievement 4:</label>
                <input
                    type="text"
                    name="description4"
                    value={achievement.achievement4}
                    onChange={handleChange}
                    placeholder="Enter your achievement"
                />
            </div>
            <button className= {styles.btn} type="submit">Save</button>
        </form>
    );
};

export default AchievementForm;

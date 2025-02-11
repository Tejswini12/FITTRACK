import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminService from '../service/AdminService';
import './TrainerViewPage.css'; // Importing the CSS file

export default function TrainerViewPage() {
    const [trainer, setTrainer] = useState(null);
    const params = useParams();

    useEffect(() => {
        AdminService.getTrainerById(params.id)
            .then((result) => {
                setTrainer(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.id]);

    if (!trainer) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="trainer-container">
            <div className="trainer-card">
                <div className="trainer-avatar">
                    <img
                        src={`https://api.dicebear.com/7.x/identicon/svg?seed=${trainer.trainerName}`} 
                        alt="Trainer Avatar"
                    />
                </div>
                <h2 className="trainer-name">{trainer.trainerName}</h2>
                <p className="trainer-expertise">{trainer.expertise}</p>
                <div className="trainer-details">
                    <p><strong>ID:</strong> {trainer.id}</p>
                    <p><strong>Email:</strong> {trainer.email}</p>
                    <p><strong>Phone:</strong> {trainer.phone}</p>
                    <p><strong>Created On:</strong> {new Date(trainer.createdOn).toLocaleDateString()}</p>
                    <p><strong>Updated On:</strong> {new Date(trainer.updatedOn).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

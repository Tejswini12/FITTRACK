import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PackageService from '../service/PackageService';

export default function PackageViewPage() {
    const [pkg, setPkg] = useState(null);
    const params = useParams();

    useEffect(() => {
        PackageService.getpkgById(params.id)
            .then((result) => {
                setPkg(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.id]);

    if (!pkg) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="package-container">
            <div className="package-card">
                <h2 className="package-title">Package Details</h2>
                <div className="package-details">
                    <p><strong>ID:</strong> {pkg.id}</p>
                    <p><strong>Created On:</strong> {new Date(pkg.createdOn).toLocaleDateString()}</p>
                    <p><strong>Updated On:</strong> {new Date(pkg.updatedOn).toLocaleDateString()}</p>
                    <p><strong>Price:</strong> ${pkg.price}</p>
                    <p><strong>Description:</strong> {pkg.description}</p>
                    <p><strong>Type:</strong> {pkg.packageType}</p>
                    <p><strong>Duration:</strong> {pkg.packageDuration}</p>
                </div>
            </div>
        </div>
    );
}

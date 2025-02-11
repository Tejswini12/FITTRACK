import React from 'react';

function PaymentSuccess() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Payment Successful!</h1>
                <p style={styles.message}>
                    Thank you for your payment. Your transaction has been completed successfully.
                </p>
                <button style={styles.button} onClick={() => window.location.href = '/memberProfile'}>
                    Go to Homepage
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#4CAF50',
    },
    message: {
        fontSize: '1rem',
        marginBottom: '2rem',
        color: '#333',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default PaymentSuccess;

import React, { useState } from 'react';

const UploadTemplate = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleCSVFileUpload = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            fetch('/upload', { method: 'POST', body: formData })
                .then(res => {
                    console.log('File uploading done');
                })
                .catch(err => {
                    console.error('Error while uploading the file please try again');
                });
        } else {
            alert('Please select a file to upload');
        }
    };

    return (
        <div>
            <h2>Upload CSV File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".csv" onChange={handleCSVFileUpload} />
                <button type="submit">Upload File</button>
            </form>
        </div>
    );
};

export default UploadTemplate;

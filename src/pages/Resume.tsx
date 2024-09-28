import {FC, useState, SetStateAction, useEffect } from 'react';

const Resume: FC<any> = () => {
    const [pdf, setPdf] = useState(null);
		const [filename, setFilename] = useState('');
    const getResume = () => {
        const url = `https://williamgriffin.pythonanywhere.com/api/v1/resume`;
        fetch(url)
        .then(response => {
            const getFilename:SetStateAction<any> = response.headers.get('Content-Disposition')?.slice(21);
						setFilename(getFilename)
            response.blob()
            .then(blob => {
                let newBlob = new Blob([blob], {type: "application/pdf"});
                const data:SetStateAction<any> = window.URL.createObjectURL(newBlob);
                setPdf(data);
								setTimeout(() => {
									let link = document.createElement('a');
									link.href = data;
									link.download = getFilename ? getFilename : 'no-name.pdf';
									link.click();
								}, 1000)
            })
        })
    }

		

		useEffect(() => {
			getResume()
		}, []);

    return (
        <div id='resume'>
            {/* <button onClick={getResume}>Download PDF</button> */}
            {pdf && <iframe title='Resume' src={pdf} width="100%" height="600px" />}
        </div>
    );
}

export default Resume;

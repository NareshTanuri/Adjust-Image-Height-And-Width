import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ChangeImageWidthAndHeight = () => {
    const [imageHeight, setImageHeight] = useState(10);
    const [imageWidth, setImageWidth] = useState(10);

    const handleChangeWidth = (width) => {
        const widthChange = width.target.value;
        setImageWidth(widthChange);
    };

    const handleChangeHeight = (height) => {
        const heightChange = height.target.value;
        setImageHeight(heightChange);
    };
    return (
        <>
            <div className='text-center'>
                <div className='row'>
                    <div className='col-sm-3'><input type="range" onChange={handleChangeHeight} value={imageHeight} /></div>
                    <div className='col-sm-3'><h6>Height:{imageHeight}</h6></div>
                    <div className='col-sm-3'><input type="range" onChange={handleChangeWidth} value={imageWidth} /></div>
                    <div className='col-sm-3'><h6>Width:{imageWidth}</h6></div>
                </div>
                <h1>Adjust Image Height And Width</h1>
                <br />
                <div className='text-center row'>
                    <div className='col-sm-12'>
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
                            alt="error"
                            width={imageWidth * 10}
                            height={imageHeight * 10}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default ChangeImageWidthAndHeight;

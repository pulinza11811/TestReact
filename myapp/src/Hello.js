
//const dayjs = require('dayjs')
import axios from 'axios';
import config from './config';
const { useState } = require('react');



function Hello() {
    
    return <>
        <div className='row'>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 1</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 2</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 3</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 4</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 5</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 6</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 7</div>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>Cell 8</div>
        </div>
    </>
}

export default Hello;

/*const { useState } = require('react')


function Hello() {
    const [user, setUser] = useState({})

    const handleSignIn = () =>{
        console.log(user);
    }

    return <>
        <div className='container p-5'>
            <div>
                <div>Name</div>
                <input className='form-control' onChange={e => setUser({...user, name: e.target.value})}/>
            </div>
            <div className='my-3'>
                <div>Email</div>
                <input className='form-control' onChange={e => setUser({...user, email: e.target.value})}/>
            </div>
            <button className='btn btn-primary mt-3' onClick={handleSignIn}>
                <i className='fa fa-check me-2'></i>Sign In
            </button>
        </div>
    </>
}

export default Hello;*/

/*function Hello() {
    
    const [fileSelected, setFileSelected] = useState({});

    const selectedFile = (fileInput) => {
        if(fileInput !== undefined) {
            if (fileInput.length > 0) {
                setFileSelected(fileInput[0]);
            }
        }
    }

    const uploadFile = async () => {
        try {
            const formData = new FormData();
            formData.append('myFile', fileSelected);

            await axios.post(config.apiPath + '/book/testUpload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (e) {
            console.log(e);
        }
    }
    return <>
        <div>
            <input type='file' onChange={e => selectedFile(e.target.files)}></input>
            <button className='btn btn-primary' onClick={uploadFile}>
                Call API GET Method
            </button>
        </div>
    </>
}

export default Hello;*/
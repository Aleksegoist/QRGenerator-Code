import QRCode from 'qrcode';
import { useState } from 'react';

const App = () => {
    const [url, setUrl] = useState('');
    const [qrcode, setQrcode] = useState('');

    const GenerateQRCode = () => {
        QRCode.toDataURL(
            url,
            { margin: 2, color: { dark: '#0000ffff' } },
            (err, url) => {
                if (err) return console.error(err);
                setQrcode(url);
            }
        );
    };

    return (
        <div className='app'>
            <h3>© AY dev.</h3>
            <h1>QR Code Generator</h1>
            <input
                type='text'
                placeholder='Enter https://'
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <button onClick={GenerateQRCode}>Generate</button>
            {qrcode && (
                <>
                    <img src={qrcode} alt='photo_qrcode' />
                    <a href={qrcode} download='qrcode.png'>
                        Download QR Code
                    </a>
                </>
            )}
        </div>
    );
};
export default App;

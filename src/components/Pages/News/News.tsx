import React from 'react';
import './News.css';

function News() {
    return (
        <div className='pages-container'>
            <h1>StationAnalyst 1.0</h1>
            <p className='pages-news-sub-title'>October 5 by IP Code in Software update</p>
            <p className='pages-news-content'>This is the first “working” version of this app. <br /> Good luck out there! o7</p>
            <br />
            <h1>TradeHubAnalyst 1.0a</h1>
            <p className='pages-news-sub-title'>October 5 by IP Code in Software update</p>
            <p className='pages-news-content'>Updates in program efficiency and background code management. Refresh process is now divided into download and calculate phases. Modified version checking methods.<br />Good luck out there! o7</p>
            <br />
            <h1>TradeHubAnalyst 1.0</h1>
            <p className='pages-news-sub-title'>September 14 by IP Code in Software update</p>
            <p className='pages-news-content'>This is the first “working” version of this app.<br />Good luck out there! o7</p>
            <br />
        </div>
    );
}

export default News;
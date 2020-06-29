import React from 'react';
import './News.css';

function News() {
    return (
        <div className='pages-container'>
            <h1>StationAnalyst v2.0.1</h1>
            <p className='pages-news-sub-title'>June 28, 2020. by ip-code in Software update</p>
            <p className='pages-news-content'>New version control added to include the new website.<br />Good luck out there! o7</p>
            <br />
            <h1>StationAnalyst v2.0.0</h1>
            <p className='pages-news-sub-title'>June 27, 2020. by ip-code in Software update</p>
            <p className='pages-news-content'>Combined the features of StationAnalyst into TradeHubAnalyst with many bug fixes.<br />Good luck out there! o7</p>
            <br />
            <h1>StationAnalyst v1.0</h1>
            <p className='pages-news-sub-title'>October 5, 2016. by ip-code in Software update</p>
            <p className='pages-news-content'>This is the first “working” version of this app. <br />Good luck out there! o7</p>
            <br />
            <h1>TradeHubAnalyst v1.0a</h1>
            <p className='pages-news-sub-title'>October 5, 2016. by ip-code in Software update</p>
            <p className='pages-news-content'>Updates in program efficiency and background code management. Refresh process is now divided into download and calculate phases. Modified version checking methods.<br />Good luck out there! o7</p>
            <br />
            <h1>TradeHubAnalyst v1.0</h1>
            <p className='pages-news-sub-title'>September 14, 2016. by ip-code in Software update</p>
            <p className='pages-news-content'>This is the first “working” version of this app.<br />Good luck out there! o7</p>
            <br />
        </div>
    );
}

export default News;
import React from 'react';
import './Download.css';
import ImageApp from './assets/app.png';
import ImageHaulingGrid from './assets/hauling_grid.png';

function Download() {
    return (
        <div className='pages-container'>
            <p className='pages-download-title'>Download</p>
            <div className='div-column-container'>
                <div className='div-column'>
                    <img src={ImageApp} className='pages-download-image-app' />
                </div>
                <div className='div-column'>
                    <h1>TradeHubAnalyst v2.0.0</h1>
                    <p className='pages-download-links'>Download link: <a href="https://github.com/ip-code/TradeHubAnalyst/releases/download/v2.0.0/TradeHubAnalystInstaller.msi">click to download</a></p>
                    <p>TradeHubAnalyst is a windows application [.exe] designed for trading between station. It collects data for about a hundred filtered items from eve-central.com and performs calculations to find potential profitable trades between trade hubs:</p>
                    <ul>
                        <li>Jita IV – Moon 4 – Caldari Navy Assembly Plant</li>
                        <li>Amarr VIII (Oris) – Emperor Family Academy</li>
                        <li>Dodixie IX – Moon 20 – Federation Navy Assembly Plant</li>
                        <li>Hek VIII – Moon 12 – Boundless Creation Factory</li>
                        <li>Rens VI – Moon 8 – Brutor Tribe Treasury</li>
                    </ul>
                </div>
            </div>
            <p>To use TradeHubAnalyst open the application and click the button to refresh data. Application will then start collection and calculating all the trades possible between the trade hubs. After calculation TradeHubAnalyst will display the top thirty most profitable trades.</p>
            <img src={ImageHaulingGrid} className='pages-download-image-hauling-grid' />
            <p>Menu description:</p>
            <ul>
                <li>Item – item title as seen in the game</li>
                <li>From – station where you buy the items (on hover you can see full station name)</li>
                <li>To – station where you sell the items (on hover you can see full station name)</li>
                <li>Quantity – maximum number of items you can buy and remain profitable</li>
                <li>Purchase price [Isk] – average price of an individual item</li>
                <li>Possible profit [Isk] – amount you can get when you sell the items</li>
                <li>EveMarketer – link to the website so you can check the information before purchase</li>
            </ul>
            <p>Please note that:</p>
            <ul>
                <li>Calculations do not include fees and taxes your character pays when making transactions</li>
                <li>Items you buy can already be on their way to your destination from another source</li>
                <li>You need to check item price in game market because the item you want could already be sold</li>
                <li>You need to check if you have enough cargo space before buying items</li>
                <li>Trade routes between hubs are not safe so don’t haul too much cargo at once</li>
            </ul>
            <p>For beginners (no skills or capital):</p>
            <p className='pages-download-indented'>You can use TradeHubAnalyst to check for items of interest which you can carry in your T1 frigate between trade hubs. Even though trade routes are not safe, if you carry under a couple of millions worth of cargo, you should be relatively safe. This means that you will not be able to earn a lot of Isk but it can jump-start your hauling career and get you some experience on the space highway.</p>
            <br />
            <p>For advanced players:</p>
            <p className='pages-download-indented'>At this stage of development TradeHubAnalyst can hopefully save you some time while analyzing market.</p>
            <br />
            <p>Future development (with API and CREST):</p>
            <ul>
                <li>item trade as a group of transactions</li>
                <li>detailed info for every item transaction</li>
                <li>character trading skills in calculation</li>
                <li>cargo space in calculation</li>
                <li>sorting options</li>
                <li>more trade hubs</li>
                <li>trade run planner (trades in sequence)</li>
                <li>application optimization</li>
                <li>possible conversion to java</li>
            </ul>
            <p>StationAnalyst is a windows application [.exe] designed for station trading. It collects data for about a hundred filtered items from eve-central.com and performs calculations to find potential items that can currently be bought and sold at a profit in station Jita IV – Moon 4 – Caldari Navy Assembly Plant.</p>
            <br />
            <p>To use StationAnalyst open the application and click the button to refresh data. Application will then start collection and calculating all the trades possible between the trade hubs. After calculation StationAnalyst will display the top thirty most profitable trades.</p>
            <br />
            <p>Menu description:</p>
            <ul>
                <li>Item – item title as seen in the game</li>
                <li>Buy price [Isk] – price for setting buy orders</li>
                <li>Sell price [Isk] – price for setting sell orders</li>
                <li>Possible profit [Isk] – amount you can get when you sell the items</li>
                <li>EveCentral – link to the website so you can check the information before purchase</li>
            </ul>
            <p>Please note that:</p>
            <ul>
                <li>Calculations do not include fees and taxes your character pays when making transactions</li>
                <li>You need to check item price in game market because the item you want could already be sold</li>
                <li>Station trading requires constant adjustment of prices in order to stay on top of buy and sell trade pools</li>
            </ul>
            <p>For beginners (no skills or capital) and advanced players:</p>
            <p className='pages-download-indented'>You can use StationAnalyst to check for items which are being actively traded with average item holding time (time spent waiting for your items to be sold) of under one day.</p>
            <br />
            <p>Future development (with API and CREST):</p>
            <ul>
                <li>detailed info for every item transaction</li>
                <li>character trading skills in calculation</li>
                <li>sorting options</li>
                <li>more trade hubs</li>
                <li>application optimization</li>
                <li>possible conversion to java</li>
                <li>CREST use for faster and more accurate data collection</li>
            </ul>

        </div>
    );
}

export default Download;
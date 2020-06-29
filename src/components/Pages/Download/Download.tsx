import React from 'react';
import './Download.css';
import ImageApp from './assets/app.png';
import ImageHauling from './assets/hauling.png';
import ImageStationTrading from './assets/station_trading.png';
import ImageDatabase from './assets/database.png';

function Download() {
    return (
        <div className='pages-container'>
            <div className='div-column-container'>
                <div className='pages-download-column-left'>
                    <h1>TradeHubAnalyst v2.0.1</h1>
                    <p className='pages-download-links'>Download link: <a href="https://github.com/ip-code/TradeHubAnalyst/releases/download/v2.0.1/TradeHubAnalystInstaller.msi">click to download</a></p>
                    <p>TradeHubAnalyst is a windows application [.exe] designed for calccation of profitable hauling trades and station trading items. It collects data for items filtered by your choice and collected from evemarketer.com and then performs calculations to find potential profitable trades between trade hubs:</p>
                    <ul>
                        <li>Jita IV – Moon 4 – Caldari Navy Assembly Plant</li>
                        <li>Amarr VIII (Oris) – Emperor Family Academy</li>
                        <li>Dodixie IX – Moon 20 – Federation Navy Assembly Plant</li>
                        <li>Hek VIII – Moon 12 – Boundless Creation Factory</li>
                        <li>Rens VI – Moon 8 – Brutor Tribe Treasury</li>
                    </ul>
                </div>
                <div className='pages-download-column-right'>
                    <img src={ImageApp} className='pages-download-image-app' />
                </div>
            </div>
            <p>To use TradeHubAnalyst for the calculation of hauling trades, open the application, input the desired Cargo Capacity of your ship (0 = infinite), money available for making the trade (0 = infinite), select the station you are starting from and then click the button to refresh data. TradeHubAnalyst will then start collection and calculation of all the profitable trades between the trade hubs. After calculation TradeHubAnalyst will display the trades in the table.</p>
            <img src={ImageHauling} className='pages-download-image-hauling' />
            <p>Table description:</p>
            <ul>
                <li>Item – item title as seen in the game</li>
                <li>From – station where you buy the items (on hover you can see full station name)</li>
                <li>To – station where you sell the items (on hover you can see full station name)</li>
                <li>Quantity – maximum number of items you can buy and remain profitable</li>
                <li>Purchase price [Isk] – average price of an individual item</li>
                <li>Possible profit [Isk] – amount you can get when you sell the items</li>
                <li>ROI [%] – return on investment</li>
                <li>EveMarketer – link to the website so you can check the information before purchase</li>
            </ul>
            <p>Please note that:</p>
            <ul>
                <li>Calculations do not include fees and taxes your character pays when making transactions</li>
                <li>Items you buy can already be on their way to your destination from another source</li>
                <li>You need to check item price in ingame market because the item you want could already have been bought</li>
                <li>You need to check if you have enough cargo space before buying items</li>
                <li>Routes between main trade hubs are not safe so don’t haul too much cargo at once</li>
            </ul>
            <p>To use TradeHubAnalyst for the calculation of station trading, open the application, select "Station trading" tab, input Broker's fee and Sales Tax your character is paying, select the station on which you will be trading and then click the button to refresh data. TradeHubAnalyst will then start collection and calculation of all the profitable items for station trading. After calculation TradeHubAnalyst will display the trades in the table.</p>
            <img src={ImageStationTrading} className='pages-download-image-hauling' />
            <p>Table description:</p>
            <ul>
                <li>Item – item title as seen in the game</li>
                <li>Buy price [Isk] - price at which you can place buy orders</li>
                <li>Sell price [Isk] - price at which you can place sell orders</li>
                <li>Spread [Isk] - Isk difference between placed orders</li>
                <li>Spread [%] - difference between placed orders as a percent of item sell order price</li>
                <li>EveMarketer – link to the website so you can check the information before purchase</li>
            </ul>
            <p>Please note that:</p>
            <ul>
                <li>Calculations do not include potential relist fees to bump orders to number one position</li>
                <li>You need to buy items in stack to reduce the relist fee</li>
                <li>You need to check item price in ingame market because the item you want could already have been bought</li>
            </ul>
            <p>To update the TradeHubAnalyst item database, station list and desired filters for calculations, open the application and select "Database" tab. In the Items section you can input the maximum age you will allow for items to be in the application database before they will be updated. To start the item update process you can click on the Update Items button.</p>
            <img src={ImageDatabase} className='pages-download-image-database' />
            <p>In the Stations section you can find already added trade hubs which you can either delete or update. You can all add new trade hubs of you choosing which the TradeHubAnalys will take into account when performing calculations. In the filters section you can find the following filters that you can save:</p>
            <ul>
                <li>Maximum Volume [m3] - maximum volume item must be under to be valid for calculations</li>
                <li>Maximum Price [Isk] - maximum price item must be under to be valid for calculations</li>
                <li>Trading Volume [Iems] - minimum number of item in buy and sell orders for item to be valid for calculations</li>
                <li>Max Async Tasks - maximum number of tasks TradeHubAnalyst can run during calculation</li>
                <li>Ignore zero values - ignore items in database with zero values (usually non-tradable items)</li>
                <li>Total Filtered Items - number of items in application database that match saved filters</li>
            </ul>
            <p>For beginners (no skills or capital):</p>
            <p className='pages-download-indented'>You can use TradeHubAnalyst Hauling to check for items of interest which you can haul in your T1 frigate between trade hubs. Even though trade routes are not safe, if you carry under a couple of millions worth of cargo, you should be relatively safe. This means that you will not be able to earn a lot of Isk but it can jump-start your hauling career and get you some experience on the space highway. You can use also use TradeHubAnalyst Station Trading to check for profitable items which are being actively traded in your trade hub.</p>
            <br />
            <p>For advanced players:</p>
            <p className='pages-download-indented'>At this stage of development TradeHubAnalyst can hopefully save you some time while analyzing the markets.</p>
            <br />
            <p>Future development (with API and CREST):</p>
            <ul>
                <li>use of character skills api</li>
                <li>hauling planner (trades in sequence)</li>
                <li>application optimization</li>
                <li>CREST use for faster and more accurate data collection</li>
            </ul>
        </div>
    );
}

export default Download;
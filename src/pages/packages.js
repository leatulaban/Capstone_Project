import React from 'react';

const Packages = () => {
	return (
		<div class="package">   
    <div class="PackageIntro">     
        <img src={require('../image/studio.jpg')} / >
    </div>
    <div id="packagemenu">
        <h2>Rates</h2>
        <ul>
            <li>
                <span class="Rate">Band rehearsal</span>
                <span class="Price">₱300 per hour</span>
                <span class="Description">Inclusion of 2 guitars, 1 bass guitar, 1 drumset.</span>
            </li>
            <li>
                <span class="Rate">Recording</span>
                <span class="Price">₱600 per hour</span>
                <span class="Description">This is live recording. All instruments recorded together.</span>
            </li>
            <li>
                <span class="Rate">Track recording</span>
                <span class="Price">₱1200 per hour</span>
                <span class="Description">Instruments and vocals are recorded individually.</span>
            </li>
            <li>
                <span class="Rate">Lessons</span>
                <span class="Price">₱500 per hour</span>
                <span class="Description">1-on-1 session for voice, guitar, bass, drums and piano lessons</span>
            </li>
        </ul>
    </div>
</div>
	);
};

export default Packages;

import React from 'react';

const Teachers = () => {
	return (
	<div class="teacher">   
        <div class="teacherImg">     
            <img src={require('../image/voice.jpg')}/>
            <br /><span class="Rate">Vina Krizia Arellano</span>
            <br /><span class="Description">Voice, Piano</span>
        </div>
        <div class="teacherImg">     
            <img src={require('../image/guitars.jpg')}/>
            <br /><span class="Rate">Ocho Toleran</span>
            <br /><span class="Description">Guitar</span>
        </div>
        <div class="teacherImg">     
            <img src={require('../image/bass.jpg')}/>
            <br /><span class="Rate">Karel Honasan</span>
            <br /><span class="Description">Bass</span>
        </div>
        <div class="teacherImg">     
            <img src={require('../image/drums.jpg')}/>
            <br /><span class="Rate">Macoy Manuel</span>
            <br /><span class="Description">Drums</span>
        </div>
    </div> 
	);
};

export default Teachers;

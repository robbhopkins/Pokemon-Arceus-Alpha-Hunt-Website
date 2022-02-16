

function generate(){    
    var locCodes = ['of', 'cm', 'cc', 'ch', 'ai']
    var locs = ['Obidian Fieldlands', 'Crimson Mirelands', 'Cobalt Coastlands', 'Coronet Highlands', 'Alabaster Icelands']
    var times = ['Morning', 'Midday', 'Evening', 'Nightfall'];
    var startPoke = ['bidoof.png', 'budew.png', 'glameow.png', 'yanma.png', 'snorunt.png'];
    var ofTargets = ['bibarel.png', 'graveler.png', 'kricketune.png', 'parasect.png', 'floatzel.png', 'staravia.png', 'golbat.png', 'rapidash.png', 'luxio.png', 'lopunny.png', 'scyther.png', 'stantler.png', 'snorlax.png', 'heracross.png', 'magikarp.png', 'gyarados.png', 'alakazam.png', 'blissey.png', 'infernape.png'];
    var ofTargetSpots = ['Tidewater Dam (South)', 'Grueling Grove (South)', 'Tidewater Dam', 'Nature\'s Pantry (North)', 'Worn Bridge (Northwest)', 'Windswept Run', 'Oreburrow Tunnel', 'Horseshoe Plains (Northeast)', 'Floaro Gardens (South)', 'The Heartwood (West)', 'Grandtree Arena', 'Deertrack Heights (East)', 'Lake Verity (East)', 'Grueling Grove', 'Oreburrow Tunnel', 'Lake Verity (West)', 'Sandgem Flats (West)', 'Obsidian Falls (Northeast)', 'Ramanas Island'];
    var cmTargets = ['pachirisu.png', 'carnivine.png', 'ursaring.png', 'skuntank.png', 'tangrowth.png', 'rhyhorn.png', 'hippowdon.png', 'toxicroak.png', 'h_sliggoo.png', 'onix.png', 'raichu.png', 'lickilicky.png', 'ursaring.png', 'yanmega.png', 'vespiquen.png', 'whiscash.png', 'torterra.png'];
    var cmTargetSpots = ['Gapejaw Bog (Southwest)', 'Cottonsedge Prairie (North)', 'Ursa\'s Ring', 'Scarlet Bog (Center)', 'Scarlet Bog (West)', 'Near Diamond Heath', 'Sludge Mound', 'Holm of Trials (Northwest)', 'Holm of Trials (Right)', 'Diamond Settlement, Southern Platform', 'Golden Lowlands (Northwest)', 'Shrouded Ruins (Northwest)', 'Gapejaw Bog (West)', 'Droning Meadow', 'Cottonsedge Prairie (North)', 'Lake Valor', 'Holm of Trials'];
    var ccTargets = ['machoke.png', 'drapion.png', 'purugly.png', 'octillery.png', 'mantine.png', 'tentacruel.png', 'golduck.png', 'ambipom.png', 'walrein.png', 'chansey.png', 'mothim.png', 'gyarados.png', 'lumineon.png', 'ninetails.png', 'gastrodon.png', 'empoleon.png'];
    var ccTargetSpots = ['Castaway Shore', 'Ginkgo Landing', 'Veilstone Cape', 'Castaway Shore', 'Tranquility Cove', 'Lunker\'s Lair', 'Bathers\' Lagoon', 'Hideaway Bay', 'Ginkgo Landing', 'Tombolo Walk', 'Spring Path', 'Sand\'s Reach', 'Seagrass Haven', 'Firespit Island', 'Seagrass Haven', 'Islespy Shore'];
    var chTargets = ['gligar.png', 'bronzong.png', 'mothim.png', 'luxray.png', 'gabite.png', 'crobat.png', 'golem.png', 'steelix.png', 'clefable.png', 'electivire.png', 'h_goodra.png', 'probopass.png', 'rhyperior.png', 'gliscor.png'];
    var chTargetSpots = ['Celestica Ruins', 'Clamberclaw Cliffs', 'Wayward Wood', 'Sacred Plaza', 'Clamberclaw Cliffs', 'Wayward Cave', 'Bolderoll Ravine', 'Celestica Trail', 'Fabled Spring', 'Cloudcap Pass', 'Ancient Quarry', 'Primeval Grotto', 'Sacred Plaza', 'Primeval Grotto'];
    var aiTargets = ['h_sneasel.png', 'swinub.png', 'glalie.png', 'chimecho.png', 'piloswine.png', 'electabuzz.png', 'abomasnow.png', 'mamoswine.png', 'lucario.png', 'gardevoir.png', 'machamp.png', 'gallade.png', 'froslass.png', 'garchomp.png'];
    var aiTargetSpots = ['Avalugg\'s Legacy', 'Avalugg\'s Legacy', 'Bonechill Wastes', 'Lake Acuity', 'Arena\'s Approach (East)', 'Icebound Falls', 'Avalugg\'s Legacy', 'Avalugg\'s Legacy', 'Icebound Falls', 'Heart\'s Crag (Except at Night)', 'Arena\'s Approach', 'Snowpoint Temple', 'Avalanche Slopes (Bottom)', 'Avalanche Slopes'];

    var alphaPath = '';
    var startPath = '';

    var targets = [];

    var time = times[Math.floor(Math.random()*times.length)];

    var mTable = document.getElementById("Mission");
    mTable.innerHTML="<tr>        <th>            Location        </th>        <th>            Time of Day        </th>        <th>          Starting Pokemon       </th></tr>";
    var mRow = mTable.insertRow(1);
    var mLoc = mRow.insertCell(0);
    var mTime = mRow.insertCell(1);
    var mStartPoke = mRow.insertCell(2);
    var tTable = document.getElementById("Targets");
    tTable.innerHTML = "        <tr>    <th>        Target #1    </th>    <th>        Target #2    </th>    <th>        Target #3    </th></tr>";
    var tRow0 = tTable.insertRow(1);
    var tTar0 = tRow0.insertCell(0);
    var tTar1 = tRow0.insertCell(1);
    var tTar2 = tRow0.insertCell(2);
    var tRow1 = tTable.insertRow(2);
    var tTarSpot0 = tRow1.insertCell(0);
    var tTarSpot1 = tRow1.insertCell(1);
    var tTarSpot2 = tRow1.insertCell(2);


    var loc = document.getElementById("locations").options[document.getElementById("locations").selectedIndex].value;

    if (loc == 'r') loc = locCodes[Math.floor(Math.random()*locCodes.length)];

    switch(loc){
        case 'of':
            alphaPath = 'poke/of/alpha/';
            startPath = 'poke/of/start/';
            mLoc.innerHTML = locs[0];
            mTime.innerHTML = time;
            mStartPoke.innerHTML = "<img src='"+startPath+startPoke[0]+"' width='100' length='100'>";
            
            while(targets.length<3){
                let add = Math.floor(Math.random()*ofTargets.length);
                if(!targets.includes(add)) targets.push(add);
            }
            tTar0.innerHTML = "<img src='"+alphaPath+ofTargets[targets[0]]+"' width='100' length='100'>";
            tTar1.innerHTML = "<img src='"+alphaPath+ofTargets[targets[1]]+"' width='100' length='100'>";
            tTar2.innerHTML = "<img src='"+alphaPath+ofTargets[targets[2]]+"' width='100' length='100'>";

            tTarSpot0.innerHTML = ofTargetSpots[targets[0]];
            tTarSpot1.innerHTML = ofTargetSpots[targets[1]];
            tTarSpot2.innerHTML = ofTargetSpots[targets[2]];
            break;
        case 'cm':
            alphaPath = 'poke/cm/alpha/';
            startPath = 'poke/cm/start/';
            mLoc.innerHTML = locs[1];
            mTime.innerHTML = time;
            mStartPoke.innerHTML = "<img src='"+startPath+startPoke[1]+"' width='100' length='100'>";
            
            while(targets.length<3){
                let add = Math.floor(Math.random()*cmTargets.length);
                if(!targets.includes(add)) targets.push(add);
            }
            tTar0.innerHTML = "<img src='"+alphaPath+cmTargets[targets[0]]+"' width='100' length='100'>";
            tTar1.innerHTML = "<img src='"+alphaPath+cmTargets[targets[1]]+"' width='100' length='100'>";
            tTar2.innerHTML = "<img src='"+alphaPath+cmTargets[targets[2]]+"' width='100' length='100'>";

            tTarSpot0.innerHTML = cmTargetSpots[targets[0]];
            tTarSpot1.innerHTML = cmTargetSpots[targets[1]];
            tTarSpot2.innerHTML = cmTargetSpots[targets[2]];
            break;
        case 'cc':
            alphaPath = 'poke/cc/alpha/';
            startPath = 'poke/cc/start/';
            mLoc.innerHTML = locs[2];
            mTime.innerHTML = time;
            mStartPoke.innerHTML = "<img src='"+startPath+startPoke[2]+"' width='100' length='100'>";
            
            while(targets.length<3){
                let add = Math.floor(Math.random()*ccTargets.length);
                if(!targets.includes(add)) targets.push(add);
            }
            tTar0.innerHTML = "<img src='"+alphaPath+ccTargets[targets[0]]+"' width='100' length='100'>";
            tTar1.innerHTML = "<img src='"+alphaPath+ccTargets[targets[1]]+"' width='100' length='100'>";
            tTar2.innerHTML = "<img src='"+alphaPath+ccTargets[targets[2]]+"' width='100' length='100'>";

            tTarSpot0.innerHTML = ccTargetSpots[targets[0]];
            tTarSpot1.innerHTML = ccTargetSpots[targets[1]];
            tTarSpot2.innerHTML = ccTargetSpots[targets[2]];
            break;
        case 'ch':
            alphaPath = 'poke/ch/alpha/';
            startPath = 'poke/ch/start/';
            mLoc.innerHTML = locs[3];
            mTime.innerHTML = time;
            mStartPoke.innerHTML = "<img src='"+startPath+startPoke[3]+"' width='100' length='100'>";
            
            while(targets.length<3){
                let add = Math.floor(Math.random()*chTargets.length);
                if(!targets.includes(add)) targets.push(add);
            }
            tTar0.innerHTML = "<img src='"+alphaPath+chTargets[targets[0]]+"' width='100' length='100'>";
            tTar1.innerHTML = "<img src='"+alphaPath+chTargets[targets[1]]+"' width='100' length='100'>";
            tTar2.innerHTML = "<img src='"+alphaPath+chTargets[targets[2]]+"' width='100' length='100'>";

            tTarSpot0.innerHTML = chTargetSpots[targets[0]];
            tTarSpot1.innerHTML = chTargetSpots[targets[1]];
            tTarSpot2.innerHTML = chTargetSpots[targets[2]];
            break;
        case 'ai':
            alphaPath = 'poke/ai/alpha/';
            startPath = 'poke/ai/start/';
            mLoc.innerHTML = locs[4];
            mTime.innerHTML = time;
            mStartPoke.innerHTML = "<img src='"+startPath+startPoke[4]+"' width='100' length='100'>";
            
            while(targets.length<3){
                let add = Math.floor(Math.random()*aiTargets.length);
                if(!targets.includes(add)) targets.push(add);
            }
            tTar0.innerHTML = "<img src='"+alphaPath+aiTargets[targets[0]]+"' width='100' length='100'>";
            tTar1.innerHTML = "<img src='"+alphaPath+aiTargets[targets[1]]+"' width='100' length='100'>";
            tTar2.innerHTML = "<img src='"+alphaPath+aiTargets[targets[2]]+"' width='100' length='100'>";

            tTarSpot0.innerHTML = aiTargetSpots[targets[0]];
            tTarSpot1.innerHTML = aiTargetSpots[targets[1]];
            tTarSpot2.innerHTML = aiTargetSpots[targets[2]];
            break;
    }

    
    document.getElementById("reveal").removeAttribute("hidden");
};

// i was initially going to implement a function but javascript
// decided that today it would fuck me over for 4 hours straight
// so now it's a bunch of separate functions. thanks ecma!

// i know there might be an easier and more organized way of
// doing this but it just works^TM.

console.log("art script loaded!"); //just in case it doesn't

function shutDown() {
document.getElementById("pickenchoose").style = "display: none;"
document.getElementById("theupperpart").style = "display: block;"
}
function art_14(){
var filename = "stuff/artwork/14.png";
var filename_lq = "stuff/artwork/lq/14.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "My Persona's Reference Sheet";

document.getElementById("aDate").innerHTML = "2025/02/16";

document.getElementById("aSiteOUP").style = "";
document.getElementById("aSite").style = "";
document.getElementById("aSite").innerHTML = "deviantart.com & tumblr.com";
document.getElementById("aTools").innerHTML = "Krita, Huion HS610";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2025 Aleph Diallo."

document.getElementById("aDesc").innerHTML = "A double whammy of descriptions!<br />Deviantart:<br />Totally didn't steal from The Residents, no sirree...<br />...I mean, of course, I'm only joking that I stole from the Residents. It'd be much more appropriate to say inspired or something, IDK.<br />The original file also has him in two different art styles, too, they're just hidden layers though so I'm not gonna bother making space for them here.<br /><br />Tumblr:<br />My new persona, an eyeball-headed individual. I have nothing else to say...";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_13(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_14(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_13(){
var filename = "stuff/artwork/13.png";
var filename_lq = "stuff/artwork/lq/13.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Meet Impy";

document.getElementById("aDate").innerHTML = "2025/02/16";

document.getElementById("aSiteOUP").style = "";
document.getElementById("aSite").style = "";
document.getElementById("aSite").innerHTML = "badbunsen.com";
document.getElementById("aTools").innerHTML = "Krita, Huion HS610";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2025 Aleph Diallo."

document.getElementById("aDesc").innerHTML = "Meet Impy. She's got beige-ish brown fur, vibrant eyes the color of the sun, long pointy and a toothy grin. A feisty, mischievous and playful mammalian, you'd think she'd believe that she's got the best life a pet could ever had... until she ended up in Rachel's care, she hated it. Most of the owners she had would treat her as some sort of trophy, considering the fact that her species had barely been fully domesticated for others to raise as pets. However, said species is known for striking down anything in its path for food or as a form of self defense, so I guess you could say that Impy's aggressive nature checks out. With Rachel (who is not in this drawing), she's able to be the witty and scheming little deviant she's always longed to be, roaming around the world with her companion.<br /><br />Of all the places to come up with such an idea, <a href='https://sonichu.com/w/images/d/d9/SchuComic10P7.jpg' target='_blank'>I'm flabbergasted that it had to be Sonichu... I'm not kidding</a>. Those little disgusting pale-fleshed horned miscreants named" + ' "Devil Trolls" ' + "ruining Chris-Chan's little museum? That's what influenced the creation of this character. It looks more like a Chao to me, though, so maybe that was a subconscious influence? Hmm...";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_12(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_14(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_12(){
var filename = "stuff/artwork/12.jpg";
var filename_lq = "stuff/artwork/lq/12.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Besides, he's got a cute name now: Torso Boy! What's he complaining about?!";

document.getElementById("aDate").innerHTML = "2025/02/10";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "badbunsen.com";
document.getElementById("aTools").innerHTML = "Notebook, random blue colored pencil";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2025 Aleph Diallo."

document.getElementById("aDesc").innerHTML = "Yes, it's an Albuquerque and " + '"No Arms No Legs Girl In Hospital"' + " reference. Sort of. Kind of. Not really.<br />So, little wee Andre Iovine (the guy without limbs) and Alastor Bates have a little beef with each other. Andre breaks Alastor's favorite golden staff after borrowing it on Halloween night for a costume party, and Alastor, having anger management issues, is absolutely upset with Andre and rips his arms and legs with his mouth out of spite. After realizing what he's done, Alastor takes him to a hospital and apologizes. Andre is still distraught by the whole legless thing, and never forgives him for it depsite Alastor forgiving him for breaking his staff.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_11(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_13(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_11(){
var filename = "stuff/artwork/11.png";
var filename_lq = "stuff/artwork/lq/11.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Nelson, Augustus and Alastor";

document.getElementById("aDate").innerHTML = "2025/02/09";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "badbunsen.com";
document.getElementById("aTools").innerHTML = "Firealpaca, Huion HS610";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2025 Aleph Diallo."

document.getElementById("aDesc").innerHTML = "Three characters: one I haven't drawn in ages, another I hadn't drawn in a while, and onethat I just couldn't seem to figure out up until now. I actually came up with the idea ofthem taking their picture on a whim trying to figure out what to draw, and I looked through thisvery site and picked out three characters. Ironically, all of them were conceived around 2023.The piece was originally sized at 5100x382, and this was on a mid-2007 iMac running 32-bit Windowsof all things! So now it's my daily driver for drawing.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_2(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_12(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_10(){
var filename = "stuff/artwork/10.png";
var filename_lq = "stuff/artwork/lq/10.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "A character I made Today";

document.getElementById("aDate").innerHTML = "2020/11/15";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "<a href='https://www.newgrounds.com/art/view/ndurudialloofficial/a-character-i-made-today' target='_blank'>Newgrounds</a>";
document.getElementById("aTools").innerHTML = "ibisPaint, School Chromebook, fingers";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2020 Aleph Diallo. Licensed under Creative Commons Attribution-NonCommercial 3.0 unported."

document.getElementById("aDesc").innerHTML = "Wow, the only comment on the post is right... I did forget about him! I think this wassome sort of Gacha Life OC (explains the jank and the misshapen skull) that I made aroundmy Nightmare phase, where a shitload of characters were at some point sadistic and unforgiving.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_10(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_9(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_9(){
var filename = "stuff/artwork/09.png";
var filename_lq = "stuff/artwork/lq/09.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Tom Fulp and M-Bot";

document.getElementById("aDate").innerHTML = "2020/11/17";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "<a href='https://www.newgrounds.com/art/view/ndurudialloofficial/tom-fulp-and-m-bot' target='_blank'>Newgrounds</a>";
document.getElementById("aTools").innerHTML = "ibisPaint, School Chromebook, fingers";

document.getElementById("aLicense").innerHTML = "No license."

document.getElementById("aDesc").innerHTML = "For a cancelled web series idea I had brewing in my head in 2020. I had a ton of ideas like these... oh well, let bygones be bygones! Especially since I'd probably get strange looks if I actually finished it.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_10(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_4(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_8(){
var filename = "stuff/artwork/08.jpg";
var filename_lq = "stuff/artwork/lq/08.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Augustus Model Sheet Part 3/3";

document.getElementById("aDate").innerHTML = "2023/08/01";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "Google Drive";
document.getElementById("aTools").innerHTML = "Copy Paper, #2 pencil";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2023 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "...so he gets the most love and care put into him. Therefore I did Nelson absolutely dirty and he will never forgive me.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_7(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_3(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_7(){
var filename = "stuff/artwork/07.jpg";
var filename_lq = "stuff/artwork/lq/07.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Augustus Model Sheet Part 2/3";

document.getElementById("aDate").innerHTML = "2023/08/01";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "Google Drive";
document.getElementById("aTools").innerHTML = "Copy Paper, colored pencils, #2 pencil, ballpoint pen";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2023 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "I had a lot of fun drawing him...";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_6(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_8(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_6(){
var filename = "stuff/artwork/06.jpg";
var filename_lq = "stuff/artwork/lq/06.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Augustus Model Sheet Part 1/3";

document.getElementById("aDate").innerHTML = "2023/08/01";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "Google Drive";
document.getElementById("aTools").innerHTML = "Copy Paper, #2 pencil";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2023 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "Augustus' model sheet, part one of three, made around the same time as Nelson. Guess which one was my favorite...";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_5(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_7(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_5(){
var filename = "stuff/artwork/05.jpg";
var filename_lq = "stuff/artwork/lq/05.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Nelson Model Sheet Part 2/2";

document.getElementById("aDate").innerHTML = "2023/08/01";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "Google Drive";
document.getElementById("aTools").innerHTML = "Copy Paper, #2 pencil";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2023 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "A bunch of poses.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_4(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_6(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_4(){
var filename = "stuff/artwork/04.jpg";
var filename_lq = "stuff/artwork/lq/04.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Nelson Model Sheet Part 1/2";

document.getElementById("aDate").innerHTML = "2023/08/01";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "Google Drive";
document.getElementById("aTools").innerHTML = "Copy Paper, colored pencils, #2 pencil, ballpoint pen";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2023 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "Nelson's model sheet, part one of two. Damn, does he look ugly in colored pencil.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_9(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_5(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_3(){
var filename = "stuff/artwork/03.png";
document.getElementById("aPreview").src = filename;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "William and Someone";

document.getElementById("aDate").innerHTML = "2024/05/25";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "Google Drive";
document.getElementById("aTools").innerHTML = "Kleki, School Chromebook, likely a built-in stylus or Wacom CTL-4100WL";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2024 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "I shit you not, the filename in Google Drive was <em>williamandsomeone.png</em>. I didn't bother giving the bat security guard a name, but of course the more Gordon-looking one gets the name William. This is a clue as to which one is the NPC and which one is the main character.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_8(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_1(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_2(){
var filename = "stuff/artwork/02.jpg";
var filename_lq = "stuff/artwork/lq/02.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Alastor Sketches Part 2/2";

document.getElementById("aDate").innerHTML = "2025/02/06";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "badbunsen.com";
document.getElementById("aTools").innerHTML = "Notebook, HB Pencil";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2025 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "Part two of two Alastor sketches I did, now solely focusing on the human form. I ended up getting the ragdoll idea since the human form had eyes similar to 2D's (the singer from Gorillaz. The cartoon one, not Damon). I have nothing else to say.";
document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_1(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_11(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
function art_1(){
var filename = "stuff/artwork/01.jpg";
var filename_lq = "stuff/artwork/lq/01.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "Alastor Sketches Part 1/2";

document.getElementById("aDate").innerHTML = "2025/02/06";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "badbunsen.com";
document.getElementById("aTools").innerHTML = "Notebook, HB Pencil";

document.getElementById("aLicense").innerHTML = "Copyright &copy; 2025 Aleph Diallo"

document.getElementById("aDesc").innerHTML = "Part one of two Alastor sketches I did, this one being of his true form: a serpent-like body with horns and cat eyes, now with 10x more sciera. I gave him those line thingies (I'm not sure if I can call them scales) since the human form had a hat with those same lines, I thought it would serve as a subtle hint.";

document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_3(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_2(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
/*
example:
function art_num(){
var filename = "stuff/artwork/id.format";
var filename_lq = "stuff/artwork/lq/id.gif";
document.getElementById("aPreview").src = filename_lq;
document.getElementById("aBiggen").href = filename;

document.getElementById("aTitle").innerHTML = "yourtitlehere";

document.getElementById("aDate").innerHTML = "datehereinyyyymmdd";

document.getElementById("aSiteOUP").style = "display:none;";
document.getElementById("aSite").style = "display:none;";
document.getElementById("aSite").innerHTML = "yoursitenamehere";
document.getElementById("aTools").innerHTML = "yourtoolshere";

document.getElementById("aLicense").innerHTML = "Copyright &copy; YEAR Aleph Diallo"

document.getElementById("aDesc").innerHTML = "yourdeschere";
document.getElementById("aGo").innerHTML = '<strong>navigate:</strong><br /> <a href="#early" onclick="art_10(); shutDown();">Earliest</a> <a href="#previous" onclick="art_prevart(); return false;" id="aGoPrev" title="previous">&#11013;</a> <a href="#close" onclick="shutUp(); return false;" id="aGoClose" title="close">&#10799;</a> <a href="#next" onclick="art_nextart(); return false;" id="aGoNext" title="next">&#x27A1;</a> <a href="#late" onclick="art_14(); shutDown();">Latest</a>';
}
*/

function shutUp() {
    document.getElementById("pickenchoose").style = "";
    document.getElementById("theupperpart").style = "display: none;";
}

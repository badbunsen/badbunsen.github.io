function bbRandEmoticon() {

    //emoticon images
    var emoticons=new Array(9);
    emoticons[1]="/stuff/img/emoticons/01_glee.svg";
    emoticons[2]="/stuff/img/emoticons/02_pensive.svg";
    emoticons[3]="/stuff/img/emoticons/03_shock.svg";
    emoticons[4]="/stuff/img/emoticons/04_fear.svg";
    emoticons[5]="/stuff/img/emoticons/05_awooga.svg";
    emoticons[6]="/stuff/img/emoticons/06_blah.svg";
    emoticons[7]="/stuff/img/emoticons/07_displeased.svg";
    emoticons[8]="/stuff/img/emoticons/08_hapell.svg";
    emoticons[9]="/stuff/img/emoticons/09_resident.svg";
    //alt tags
    var emoticons_alt=new Array(9);
    emoticons_alt[1]="happy emoticon";
    emoticons_alt[2]="pensive emoticon";
    emoticons_alt[3]="shocked emoticon";
    emoticons_alt[4]="fearful emoticon";
    emoticons_alt[5]="awooga! emoticon";
    emoticons_alt[6]="blah guy emoticon";
    emoticons_alt[7]="displeased emoticon";
    emoticons_alt[8]="hapell emoticon";
    emoticons_alt[9]="a resident. i'm not even kidding";

    var y=Math.round(Math.random()*9)%9+1;
    document.write('<img src="'+emoticons[y]+'" class="emoticon navbut" alt="'+emoticons_alt[y]+' />');
}
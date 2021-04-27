(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BibleUp = factory());
}(this, (function () { 'use strict';

	function __$styleInject(css) {
	    if (!css) return;

	    if (typeof window == 'undefined') return;
	    var style = document.createElement('style');
	    style.setAttribute('media', 'screen');

	    style.innerHTML = css;
	    document.head.appendChild(style);
	    return css;
	}

	__$styleInject(".highlight {\n  background: #f2f2f2;\n  border-radius: 5px;\n  padding: 2px 5px;\n}\n#bu-link-all.bu-link {\n  font-style: normal;\n  text-decoration: none;\n  color: #2B60DE;\n}\n#bu-link-all.bu-link:hover,\n#bu-link-all.bu-link:active {\n  text-decoration: none;\n}\n#bu-link-all.bu-link.classic {\n  text-decoration: none;\n}\n#bu-link-all.bu-link.classic:hover,\n#bu-link-all.bu-link.classic:active {\n  color: #0038A8;\n  text-decoration: underline;\n}\n#bu-link-all.bu-link.underline {\n  text-decoration: underline;\n}\n#bu-link-all.bu-link.underline:hover {\n  color: #0038A8;\n  background: lightblue;\n}\n#bu-link-all.bu-link.style1 {\n  padding: 3px;\n  background: #f1f1f4;\n  color: #2b2d3b;\n}\n#bu-link-all.bu-link.style1:hover {\n  background: lightblue;\n}\n#bu-link-all.bu-link.style2 {\n  padding: 3px;\n  background: #f2f2f2;\n  color: black;\n}\n#bu-link-all.bu-link.style2:hover {\n  background: lightblue;\n  text-decoration: underline;\n}\n/* CLASSIC POPUP\n   BIBLEUP 📖💡\n*/\n#bu-popup.classic {\n  position: absolute;\n  font-size: 15px;\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n  margin: 0 auto;\n  background: #ffffff;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0px 0px 3px 0.7px #a6a6a6;\n}\n#bu-popup.classic p {\n  margin: 0;\n}\n#bu-popup.classic div {\n  padding: 10px;\n}\n#bu-popup.classic .header {\n  background: #e6e6e6;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#bu-popup.classic .header .version {\n  background: #f2f2f2;\n  padding: 2px 10px;\n  border-radius: 3px;\n  font-weight: normal;\n}\n#bu-popup.classic .content {\n  min-height: 60px;\n  max-height: 130px;\n  overflow-x: auto;\n  font-size: 14px;\n}\n#bu-popup.classic .content ol {\n  padding: 0 20px;\n  margin: 0;\n}\n#bu-popup.classic .content li {\n  padding: 0 5px;\n  margin: 0;\n}\n#bu-popup.classic .content li:not(:last-child) {\n  padding-bottom: 10px;\n}\n#bu-popup.classic .footer {\n  font-weight: bold;\n  text-align: right;\n  color: #8c8c8c;\n}\n#bu-popup.classic.darkTheme {\n  background: #595959;\n  color: #f2f2f2;\n}\n#bu-popup.classic.darkTheme .header {\n  color: #333333;\n  background: #d9d9d9;\n}\n/* WIKI POPUP\n   BIBLEUP 📖💡\n*/\n#bu-popup.wiki {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, -20%);\n  width: 90%;\n  max-width: 500px;\n  height: auto;\n  max-height: 220px;\n  background: #ffffff;\n  box-shadow: 0px 0px 3px 0.7px #a6a6a6;\n  font-size: 15px;\n}\n#bu-popup.wiki p {\n  margin: 0;\n}\n#bu-popup.wiki div {\n  padding: 10px;\n}\n#bu-popup.wiki .header {\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  padding-bottom: 13px;\n}\n#bu-popup.wiki .header .ref {\n  font-weight: bold;\n}\n#bu-popup.wiki .header .version {\n  /*background: darken(@bg-color, 5%);\n\t\t\tpadding: 2px 10px;\n\t\t\tborder-radius: 3px;*/\n  margin-left: 5px;\n}\n#bu-popup.wiki .header .close {\n  text-align: right;\n  margin-right: 5px;\n  font-size: 18px;\n}\n#bu-popup.wiki .content {\n  font-size: 14px;\n  min-height: 60px;\n  max-height: 130px;\n  overflow-x: auto;\n}\n#bu-popup.wiki .content ol {\n  padding: 0 20px;\n  margin: 0;\n}\n#bu-popup.wiki .content li {\n  padding: 0 5px;\n  margin: 0;\n}\n#bu-popup.wiki .content li:not(:last-child) {\n  padding-bottom: 10px;\n}\n#bu-popup.wiki .footer {\n  font-weight: bold;\n  text-align: right;\n  color: #8c8c8c;\n}\n#bu-popup.wiki.darkTheme {\n  background: #3d4245;\n  color: #f2f2f2;\n}\n/* INLINE POPUP\n   BIBLEUP 📖💡\n*/\n#bu-popup.inline {\n  position: absolute;\n  width: 80%;\n  padding-top: 10px;\n  max-width: 500px;\n  height: auto;\n  max-height: 220px;\n  background: #ffffff;\n  box-shadow: 0px 0px 3px 0.7px #cccccc;\n  font-size: 15px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n#bu-popup.inline p {\n  margin: 0;\n}\n#bu-popup.inline div {\n  padding: 10px;\n}\n#bu-popup.inline .content {\n  font-size: 14px;\n  min-height: 60px;\n  max-height: 130px;\n  overflow-x: auto;\n}\n#bu-popup.inline .content ol {\n  padding: 0 20px;\n  margin: 0;\n}\n#bu-popup.inline .content li {\n  padding: 0 5px;\n  margin: 0;\n}\n#bu-popup.inline .content li:not(:last-child) {\n  padding-bottom: 10px;\n}\n#bu-popup.inline .footer {\n  font-weight: bold;\n  text-align: right;\n  color: #8c8c8c;\n}\n#bu-popup.inline.darkTheme {\n  background: #3d4245;\n  color: #f2f2f2;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n}\n#bu-popup {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.bu-popup-hide {\n  visibility: hidden;\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n}\n.flex .col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flex .row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n");

	var bible_abbr = [{"id":"1","a":"Gen","b":"1","p":"1"},{"id":"2","a":"Ge","b":"1","p":"0"},{"id":"3","a":"Gn","b":"1","p":"0"},{"id":"4","a":"Exo","b":"2","p":"1"},{"id":"5","a":"Ex","b":"2","p":"0"},{"id":"6","a":"Exod","b":"2","p":"0"},{"id":"7","a":"Lev","b":"3","p":"1"},{"id":"8","a":"Le","b":"3","p":"0"},{"id":"9","a":"Lv","b":"3","p":"0"},{"id":"10","a":"Num","b":"4","p":"1"},{"id":"11","a":"Nu","b":"4","p":"0"},{"id":"12","a":"Nm","b":"4","p":"0"},{"id":"13","a":"Nb","b":"4","p":"0"},{"id":"14","a":"Deut","b":"5","p":"1"},{"id":"15","a":"Dt","b":"5","p":"0"},{"id":"16","a":"Josh","b":"6","p":"1"},{"id":"17","a":"Jos","b":"6","p":"0"},{"id":"18","a":"Jsh","b":"6","p":"0"},{"id":"19","a":"Judg","b":"7","p":"1"},{"id":"20","a":"Jdg","b":"7","p":"0"},{"id":"21","a":"Jg","b":"7","p":"0"},{"id":"22","a":"Jdgs","b":"7","p":"0"},{"id":"23","a":"Rth","b":"8","p":"1"},{"id":"24","a":"Ru","b":"8","p":"0"},{"id":"25","a":"1 Sam","b":"9","p":"1"},{"id":"26","a":"1 Sa","b":"9","p":"0"},{"id":"27","a":"1Samuel","b":"9","p":"0"},{"id":"28","a":"1S","b":"9","p":"0"},{"id":"29","a":"I Sa","b":"9","p":"0"},{"id":"30","a":"1 Sm","b":"9","p":"0"},{"id":"31","a":"1Sa","b":"9","p":"0"},{"id":"32","a":"I Sam","b":"9","p":"0"},{"id":"33","a":"1Sam","b":"9","p":"0"},{"id":"34","a":"I Samuel","b":"9","p":"0"},{"id":"35","a":"1st Samuel","b":"9","p":"0"},{"id":"36","a":"First Samuel","b":"9","p":"0"},{"id":"37","a":"2 Sam","b":"10","p":"1"},{"id":"38","a":"2 Sa","b":"10","p":"0"},{"id":"39","a":"2S","b":"10","p":"0"},{"id":"40","a":"II Sa","b":"10","p":"0"},{"id":"41","a":"2 Sm","b":"10","p":"0"},{"id":"42","a":"2Sa","b":"10","p":"0"},{"id":"43","a":"II Sam","b":"10","p":"0"},{"id":"44","a":"2Sam","b":"10","p":"0"},{"id":"45","a":"II Samuel","b":"10","p":"0"},{"id":"46","a":"2Samuel","b":"10","p":"0"},{"id":"47","a":"2nd Samuel","b":"10","p":"0"},{"id":"48","a":"Second Samuel","b":"10","p":"0"},{"id":"49","a":"1 Kgs","b":"11","p":"1"},{"id":"50","a":"1 Ki","b":"11","p":"0"},{"id":"51","a":"1K","b":"11","p":"0"},{"id":"52","a":"I Kgs","b":"11","p":"0"},{"id":"53","a":"1Kgs","b":"11","p":"0"},{"id":"54","a":"I Ki","b":"11","p":"0"},{"id":"55","a":"1Ki","b":"11","p":"0"},{"id":"56","a":"I Kings","b":"11","p":"0"},{"id":"57","a":"1Kings","b":"11","p":"0"},{"id":"58","a":"1st Kgs","b":"11","p":"0"},{"id":"59","a":"1st Kings","b":"11","p":"0"},{"id":"60","a":"First Kings","b":"11","p":"0"},{"id":"61","a":"First Kgs","b":"11","p":"0"},{"id":"62","a":"1Kin","b":"11","p":"0"},{"id":"63","a":"2 Kgs","b":"12","p":"1"},{"id":"64","a":"2 Ki","b":"12","p":"0"},{"id":"65","a":"2K","b":"12","p":"0"},{"id":"66","a":"II Kgs","b":"12","p":"0"},{"id":"67","a":"2Kgs","b":"12","p":"0"},{"id":"68","a":"II Ki","b":"12","p":"0"},{"id":"69","a":"2Ki","b":"12","p":"0"},{"id":"70","a":"II Kings","b":"12","p":"0"},{"id":"71","a":"2Kings","b":"12","p":"0"},{"id":"72","a":"2nd Kgs","b":"12","p":"0"},{"id":"73","a":"2nd Kings","b":"12","p":"0"},{"id":"74","a":"Second Kings","b":"12","p":"0"},{"id":"75","a":"Second Kgs","b":"12","p":"0"},{"id":"76","a":"2Kin","b":"12","p":"0"},{"id":"77","a":"1 Chron","b":"13","p":"1"},{"id":"78","a":"1 Ch","b":"13","p":"0"},{"id":"79","a":"I Ch","b":"13","p":"0"},{"id":"80","a":"1Ch","b":"13","p":"0"},{"id":"81","a":"1 Chr","b":"13","p":"0"},{"id":"82","a":"I Chr","b":"13","p":"0"},{"id":"83","a":"1Chr","b":"13","p":"0"},{"id":"84","a":"I Chron","b":"13","p":"0"},{"id":"85","a":"1Chron","b":"13","p":"0"},{"id":"86","a":"I Chronicles","b":"13","p":"0"},{"id":"87","a":"1Chronicles","b":"13","p":"0"},{"id":"88","a":"1st Chronicles","b":"13","p":"0"},{"id":"89","a":"First Chronicles","b":"13","p":"0"},{"id":"90","a":"2 Chron","b":"14","p":"1"},{"id":"91","a":"2 Ch","b":"14","p":"0"},{"id":"92","a":"II Ch","b":"14","p":"0"},{"id":"93","a":"2Ch","b":"14","p":"0"},{"id":"94","a":"II Chr","b":"14","p":"0"},{"id":"95","a":"2Chr","b":"14","p":"0"},{"id":"96","a":"II Chron","b":"14","p":"0"},{"id":"97","a":"2Chron","b":"14","p":"0"},{"id":"98","a":"II Chronicles","b":"14","p":"0"},{"id":"99","a":"2Chronicles","b":"14","p":"0"},{"id":"100","a":"2nd Chronicles","b":"14","p":"0"},{"id":"101","a":"Second Chronicles","b":"14","p":"0"},{"id":"102","a":"Ezra","b":"15","p":"1"},{"id":"103","a":"Ezr","b":"15","p":"0"},{"id":"104","a":"Neh","b":"16","p":"1"},{"id":"105","a":"Ne","b":"16","p":"0"},{"id":"106","a":"Esth","b":"17","p":"1"},{"id":"107","a":"Es","b":"17","p":"0"},{"id":"108","a":"Job","b":"18","p":"1"},{"id":"109","a":"Job","b":"18","p":"0"},{"id":"110","a":"Jb","b":"18","p":"0"},{"id":"111","a":"Pslm","b":"19","p":"1"},{"id":"112","a":"Ps","b":"19","p":"0"},{"id":"113","a":"Psalms","b":"19","p":"0"},{"id":"114","a":"Psa","b":"19","p":"0"},{"id":"115","a":"Psm","b":"19","p":"0"},{"id":"116","a":"Pss","b":"19","p":"0"},{"id":"117","a":"Prov","b":"20","p":"1"},{"id":"118","a":"Pr","b":"20","p":"0"},{"id":"119","a":"Prv","b":"20","p":"0"},{"id":"120","a":"Eccles","b":"21","p":"1"},{"id":"121","a":"Ec","b":"21","p":"0"},{"id":"122","a":"Qoh","b":"21","p":"0"},{"id":"123","a":"Qoheleth","b":"21","p":"0"},{"id":"124","a":"Song","b":"22","p":"1"},{"id":"125","a":"So","b":"22","p":"0"},{"id":"126","a":"Canticle of Canticles","b":"22","p":"0"},{"id":"127","a":"Canticles","b":"22","p":"0"},{"id":"128","a":"Song of Songs","b":"22","p":"0"},{"id":"129","a":"SOS","b":"22","p":"0"},{"id":"130","a":"Isa","b":"23","p":"1"},{"id":"131","a":"Is","b":"23","p":"0"},{"id":"132","a":"Jer","b":"24","p":"1"},{"id":"133","a":"Je","b":"24","p":"0"},{"id":"134","a":"Jr","b":"24","p":"0"},{"id":"135","a":"Lam","b":"25","p":"1"},{"id":"136","a":"La","b":"25","p":"0"},{"id":"137","a":"Ezek","b":"26","p":"1"},{"id":"138","a":"Eze","b":"26","p":"0"},{"id":"139","a":"Ezk","b":"26","p":"0"},{"id":"140","a":"Dan","b":"27","p":"1"},{"id":"141","a":"Da","b":"27","p":"0"},{"id":"142","a":"Dn","b":"27","p":"0"},{"id":"143","a":"Hos","b":"28","p":"1"},{"id":"144","a":"Ho","b":"28","p":"0"},{"id":"145","a":"Joel","b":"29","p":"1"},{"id":"146","a":"Joe","b":"29","p":"0"},{"id":"147","a":"Jl","b":"29","p":"0"},{"id":"148","a":"Amos","b":"30","p":"1"},{"id":"149","a":"Am","b":"30","p":"0"},{"id":"150","a":"Obad","b":"31","p":"1"},{"id":"151","a":"Ob","b":"31","p":"0"},{"id":"152","a":"Jnh","b":"32","p":"1"},{"id":"153","a":"Jon","b":"32","p":"0"},{"id":"154","a":"Micah","b":"33","p":"1"},{"id":"155","a":"Mic","b":"33","p":"0"},{"id":"156","a":"Nah","b":"34","p":"1"},{"id":"157","a":"Na","b":"34","p":"0"},{"id":"158","a":"Hab","b":"35","p":"1"},{"id":"159","a":"Zeph","b":"36","p":"1"},{"id":"160","a":"Zep","b":"36","p":"0"},{"id":"161","a":"Zp","b":"36","p":"0"},{"id":"162","a":"Haggai","b":"37","p":"1"},{"id":"163","a":"Hag","b":"37","p":"0"},{"id":"164","a":"Hg","b":"37","p":"0"},{"id":"165","a":"Zech","b":"38","p":"1"},{"id":"166","a":"Zec","b":"38","p":"0"},{"id":"167","a":"Zc","b":"38","p":"0"},{"id":"168","a":"Mal","b":"39","p":"1"},{"id":"169","a":"Mal","b":"39","p":"0"},{"id":"170","a":"Ml","b":"39","p":"0"},{"id":"171","a":"Matt","b":"40","p":"1"},{"id":"172","a":"Mt","b":"40","p":"0"},{"id":"173","a":"Mrk","b":"41","p":"1"},{"id":"174","a":"Mk","b":"41","p":"0"},{"id":"175","a":"Mr","b":"41","p":"0"},{"id":"176","a":"Luk","b":"42","p":"1"},{"id":"177","a":"Lk","b":"42","p":"0"},{"id":"178","a":"John","b":"43","p":"1"},{"id":"179","a":"Jn","b":"43","p":"0"},{"id":"180","a":"Jhn","b":"43","p":"0"},{"id":"181","a":"Acts","b":"44","p":"1"},{"id":"182","a":"Ac","b":"44","p":"0"},{"id":"183","a":"Rom","b":"45","p":"1"},{"id":"184","a":"Ro","b":"45","p":"0"},{"id":"185","a":"Rm","b":"45","p":"0"},{"id":"186","a":"1 Cor","b":"46","p":"1"},{"id":"187","a":"1 Co","b":"46","p":"0"},{"id":"188","a":"I Co","b":"46","p":"0"},{"id":"189","a":"1Co","b":"46","p":"0"},{"id":"190","a":"I Cor","b":"46","p":"0"},{"id":"191","a":"1Cor","b":"46","p":"0"},{"id":"192","a":"I Corinthians","b":"46","p":"0"},{"id":"193","a":"1Corinthians","b":"46","p":"0"},{"id":"194","a":"1st Corinthians","b":"46","p":"0"},{"id":"195","a":"First Corinthians","b":"46","p":"0"},{"id":"196","a":"2 Cor","b":"47","p":"1"},{"id":"197","a":"2 Co","b":"47","p":"0"},{"id":"198","a":"II Co","b":"47","p":"0"},{"id":"199","a":"2Co","b":"47","p":"0"},{"id":"200","a":"II Cor","b":"47","p":"0"},{"id":"201","a":"2Cor","b":"47","p":"0"},{"id":"202","a":"II Corinthians","b":"47","p":"0"},{"id":"203","a":"2Corinthians","b":"47","p":"0"},{"id":"204","a":"2nd Corinthians","b":"47","p":"0"},{"id":"205","a":"Second Corinthians","b":"47","p":"0"},{"id":"206","a":"Gal","b":"48","p":"1"},{"id":"207","a":"Ga","b":"48","p":"0"},{"id":"208","a":"Ephes","b":"49","p":"1"},{"id":"209","a":"Eph","b":"49","p":"0"},{"id":"210","a":"Phil","b":"50","p":"1"},{"id":"211","a":"Php","b":"50","p":"0"},{"id":"212","a":"Col","b":"51","p":"1"},{"id":"213","a":"Col","b":"51","p":"0"},{"id":"214","a":"1 Thess","b":"52","p":"1"},{"id":"215","a":"1 Th","b":"52","p":"0"},{"id":"216","a":"I Th","b":"52","p":"0"},{"id":"217","a":"1Th","b":"52","p":"0"},{"id":"218","a":"I Thes","b":"52","p":"0"},{"id":"219","a":"1Thes","b":"52","p":"0"},{"id":"220","a":"I Thess","b":"52","p":"0"},{"id":"221","a":"1Thess","b":"52","p":"0"},{"id":"222","a":"I Thessalonians","b":"52","p":"0"},{"id":"223","a":"1Thessalonians","b":"52","p":"0"},{"id":"224","a":"1st Thessalonians","b":"52","p":"0"},{"id":"225","a":"First Thessalonians","b":"52","p":"0"},{"id":"226","a":"2 Thess","b":"53","p":"1"},{"id":"227","a":"2 Th","b":"53","p":"0"},{"id":"228","a":"II Th","b":"53","p":"0"},{"id":"229","a":"2Th","b":"53","p":"0"},{"id":"230","a":"II Thes","b":"53","p":"0"},{"id":"231","a":"2Thes","b":"53","p":"0"},{"id":"232","a":"II Thess","b":"53","p":"0"},{"id":"233","a":"2Thess","b":"53","p":"0"},{"id":"234","a":"II Thessalonians","b":"53","p":"0"},{"id":"235","a":"2Thessalonians","b":"53","p":"0"},{"id":"236","a":"2nd Thessalonians","b":"53","p":"0"},{"id":"237","a":"Second Thessalonians","b":"53","p":"0"},{"id":"238","a":"1 Tim","b":"54","p":"1"},{"id":"239","a":"1 Ti","b":"54","p":"0"},{"id":"240","a":"I Ti","b":"54","p":"0"},{"id":"241","a":"1Ti","b":"54","p":"0"},{"id":"242","a":"I Tim","b":"54","p":"0"},{"id":"243","a":"1Tim","b":"54","p":"0"},{"id":"244","a":"I Timothy","b":"54","p":"0"},{"id":"245","a":"1Timothy","b":"54","p":"0"},{"id":"246","a":"1st Timothy","b":"54","p":"0"},{"id":"247","a":"First Timothy","b":"54","p":"0"},{"id":"248","a":"2 Tim","b":"55","p":"1"},{"id":"249","a":"2 Ti","b":"55","p":"0"},{"id":"250","a":"II Ti","b":"55","p":"0"},{"id":"251","a":"2Ti","b":"55","p":"0"},{"id":"252","a":"II Tim","b":"55","p":"0"},{"id":"253","a":"2Tim","b":"55","p":"0"},{"id":"254","a":"II Timothy","b":"55","p":"0"},{"id":"255","a":"2Timothy","b":"55","p":"0"},{"id":"256","a":"2nd Timothy","b":"55","p":"0"},{"id":"257","a":"Second Timothy","b":"55","p":"0"},{"id":"258","a":"Titus","b":"56","p":"1"},{"id":"259","a":"Tit","b":"56","p":"0"},{"id":"260","a":"Philem","b":"57","p":"1"},{"id":"261","a":"Phm","b":"57","p":"0"},{"id":"262","a":"Hebrews","b":"58","p":"1"},{"id":"263","a":"Heb","b":"58","p":"0"},{"id":"264","a":"James","b":"59","p":"1"},{"id":"265","a":"Jas","b":"59","p":"0"},{"id":"266","a":"Jm","b":"59","p":"0"},{"id":"267","a":"1 Pet","b":"60","p":"1"},{"id":"268","a":"1 Pe","b":"60","p":"0"},{"id":"269","a":"I Pe","b":"60","p":"0"},{"id":"270","a":"1Pe","b":"60","p":"0"},{"id":"271","a":"I Pet","b":"60","p":"0"},{"id":"272","a":"1Pet","b":"60","p":"0"},{"id":"273","a":"I Pt","b":"60","p":"0"},{"id":"274","a":"1 Pt","b":"60","p":"0"},{"id":"275","a":"1Pt","b":"60","p":"0"},{"id":"276","a":"I Peter","b":"60","p":"0"},{"id":"277","a":"1Peter","b":"60","p":"0"},{"id":"278","a":"1st Peter","b":"60","p":"0"},{"id":"279","a":"First Peter","b":"60","p":"0"},{"id":"280","a":"2 Pet","b":"61","p":"1"},{"id":"281","a":"2 Pe","b":"61","p":"0"},{"id":"282","a":"II Pe","b":"61","p":"0"},{"id":"283","a":"2Pe","b":"61","p":"0"},{"id":"284","a":"II Pet","b":"61","p":"0"},{"id":"285","a":"2Pet","b":"61","p":"0"},{"id":"286","a":"II Pt","b":"61","p":"0"},{"id":"287","a":"2 Pt","b":"61","p":"0"},{"id":"288","a":"2Pt","b":"61","p":"0"},{"id":"289","a":"II Peter","b":"61","p":"0"},{"id":"290","a":"2Peter","b":"61","p":"0"},{"id":"291","a":"2nd Peter","b":"61","p":"0"},{"id":"292","a":"Second Peter","b":"61","p":"0"},{"id":"293","a":"1 John","b":"62","p":"1"},{"id":"294","a":"1 Jn","b":"62","p":"0"},{"id":"295","a":"I Jn","b":"62","p":"0"},{"id":"296","a":"1Jn","b":"62","p":"0"},{"id":"297","a":"I Jo","b":"62","p":"0"},{"id":"298","a":"1Jo","b":"62","p":"0"},{"id":"299","a":"I Joh","b":"62","p":"0"},{"id":"300","a":"1Joh","b":"62","p":"0"},{"id":"301","a":"I Jhn","b":"62","p":"0"},{"id":"302","a":"1 Jhn","b":"62","p":"0"},{"id":"303","a":"1Jhn","b":"62","p":"0"},{"id":"304","a":"I John","b":"62","p":"0"},{"id":"305","a":"1John","b":"62","p":"0"},{"id":"306","a":"1st John","b":"62","p":"0"},{"id":"307","a":"First John","b":"62","p":"0"},{"id":"308","a":"2 John","b":"63","p":"1"},{"id":"309","a":"2 Jn","b":"63","p":"0"},{"id":"310","a":"II Jn","b":"63","p":"0"},{"id":"311","a":"2Jn","b":"63","p":"0"},{"id":"312","a":"II Jo","b":"63","p":"0"},{"id":"313","a":"2Jo","b":"63","p":"0"},{"id":"314","a":"II Joh","b":"63","p":"0"},{"id":"315","a":"2Joh","b":"63","p":"0"},{"id":"316","a":"II Jhn","b":"63","p":"0"},{"id":"317","a":"2 Jhn","b":"63","p":"0"},{"id":"318","a":"2Jhn","b":"63","p":"0"},{"id":"319","a":"II John","b":"63","p":"0"},{"id":"320","a":"2John","b":"63","p":"0"},{"id":"321","a":"2nd John","b":"63","p":"0"},{"id":"322","a":"Second John","b":"63","p":"0"},{"id":"323","a":"3 John","b":"64","p":"1"},{"id":"324","a":"3 Jn","b":"64","p":"0"},{"id":"325","a":"III Jn","b":"64","p":"0"},{"id":"326","a":"3Jn","b":"64","p":"0"},{"id":"327","a":"III Jo","b":"64","p":"0"},{"id":"328","a":"3Jo","b":"64","p":"0"},{"id":"329","a":"III Joh","b":"64","p":"0"},{"id":"330","a":"3Joh","b":"64","p":"0"},{"id":"331","a":"III Jhn","b":"64","p":"0"},{"id":"332","a":"3 Jhn","b":"64","p":"0"},{"id":"333","a":"3Jhn","b":"64","p":"0"},{"id":"334","a":"III John","b":"64","p":"0"},{"id":"335","a":"3John","b":"64","p":"0"},{"id":"336","a":"3rd John","b":"64","p":"0"},{"id":"337","a":"Third John","b":"64","p":"0"},{"id":"338","a":"Jude","b":"65","p":"1"},{"id":"339","a":"Jud","b":"65","p":"0"},{"id":"340","a":"Rev","b":"66","p":"1"},{"id":"341","a":"Re","b":"66","p":"0"},{"id":"342","a":"The Revelation","b":"66","p":"0"},{"id":"343","a":"Genesis","b":"1","p":"1"},{"id":"344","a":"Exodus","b":"2","p":"1"},{"id":"345","a":"Leviticus","b":"3","p":"1"},{"id":"346","a":"Numbers","b":"4","p":"1"},{"id":"347","a":"Deuteronomy","b":"5","p":"1"},{"id":"348","a":"Joshua","b":"6","p":"1"},{"id":"349","a":"Judges","b":"7","p":"1"},{"id":"350","a":"Ruth","b":"8","p":"1"},{"id":"351","a":"1 Samuel","b":"9","p":"1"},{"id":"352","a":"2 Samuel","b":"10","p":"1"},{"id":"353","a":"1 Kings","b":"11","p":"1"},{"id":"354","a":"2 Kings","b":"12","p":"1"},{"id":"355","a":"1 Chronicles","b":"13","p":"1"},{"id":"356","a":"2 Chronicles","b":"14","p":"1"},{"id":"357","a":"Ezra","b":"15","p":"1"},{"id":"358","a":"Nehemiah","b":"16","p":"2"},{"id":"359","a":"Esther","b":"17","p":"2"},{"id":"360","a":"Job","b":"18","p":"1"},{"id":"361","a":"Psalms","b":"19","p":"1"},{"id":"362","a":"Psalm","b":"19","p":"1"},{"id":"363","a":"Proverbs","b":"20","p":"1"},{"id":"364","a":"Ecclesiastes","b":"21","p":"1"},{"id":"365","a":"Song of Solomon","b":"22","p":"1"},{"id":"366","a":"Isaiah","b":"23","p":"1"},{"id":"367","a":"Jeremiah","b":"24","p":"1"},{"id":"368","a":"Lamentations","b":"25","p":"1"},{"id":"369","a":"Ezekiel","b":"26","p":"1"},{"id":"370","a":"Daniel","b":"27","p":"1"},{"id":"371","a":"Hosea","b":"28","p":"1"},{"id":"372","a":"Joel","b":"29","p":"1"},{"id":"373","a":"Amos","b":"30","p":"1"},{"id":"374","a":"Obadiah","b":"31","p":"1"},{"id":"375","a":"Jonah","b":"32","p":"1"},{"id":"376","a":"Micah","b":"33","p":"1"},{"id":"377","a":"Nahum","b":"34","p":"1"},{"id":"378","a":"Habakkuk","b":"35","p":"1"},{"id":"379","a":"Zephaniah","b":"36","p":"1"},{"id":"380","a":"Haggai","b":"37","p":"1"},{"id":"381","a":"Zechariah","b":"38","p":"1"},{"id":"382","a":"Malachi","b":"39","p":"1"},{"id":"383","a":"Matthew","b":"40","p":"1"},{"id":"384","a":"Mark","b":"41","p":"1"},{"id":"385","a":"Luke","b":"42","p":"1"},{"id":"386","a":"John","b":"43","p":"1"},{"id":"387","a":"Acts","b":"44","p":"1"},{"id":"388","a":"Romans","b":"45","p":"1"},{"id":"389","a":"1 Corinthians","b":"46","p":"1"},{"id":"390","a":"2 Corinthians","b":"47","p":"1"},{"id":"391","a":"Galatians","b":"48","p":"1"},{"id":"392","a":"Ephesians","b":"49","p":"1"},{"id":"393","a":"Philippians","b":"50","p":"1"},{"id":"394","a":"Colossians","b":"51","p":"1"},{"id":"395","a":"1 Thessalonians","b":"52","p":"1"},{"id":"396","a":"2 Thessalonians","b":"53","p":"1"},{"id":"397","a":"1 Timothy","b":"54","p":"1"},{"id":"398","a":"2 Timothy","b":"55","p":"1"},{"id":"399","a":"Titus","b":"56","p":"1"},{"id":"400","a":"Philemon","b":"57","p":"1"},{"id":"401","a":"Hebrews","b":"58","p":"1"},{"id":"402","a":"James","b":"59","p":"1"},{"id":"403","a":"1 Peter","b":"60","p":"1"},{"id":"404","a":"2 Peter","b":"61","p":"1"},{"id":"405","a":"1 John","b":"62","p":"1"},{"id":"406","a":"2 John","b":"63","p":"1"},{"id":"407","a":"3 John","b":"64","p":"1"},{"id":"408","a":"Jude","b":"65","p":"1"},{"id":"409","a":"Revelation","b":"66","p":"1"}];

	class ConstructPopup {
		
		static build(options) {
			const popup = document.createElement('div');
			popup.setAttribute('id', 'bu-popup');
			let popupStyle = options.popup;
			let darkTheme = options.darkTheme;
			
			switch (popupStyle) {
				case 'classic':
					popup.classList.add('classic', 'bu-popup-hide');
					if (darkTheme == true) {
						popup.classList.add('darkTheme');
					}
					popup.innerHTML = this.classic();
					document.body.appendChild(popup);
					break;
			
				//wiki-style
				case 'wiki':
					popup.classList.add('wiki', 'bu-popup-hide');
					if (darkTheme == true) {
						popup.classList.add('darkTheme');
					}
					popup.innerHTML = this.wiki();
					document.body.appendChild(popup);
					break;
					
				//inline
				case 'inline': 
					popup.classList.add('inline', 'bu-popup-hide');
					if (darkTheme == true) {
						popup.classList.add('darkTheme');
					}
					popup.innerHTML = this.inline();
					document.body.appendChild(popup);
					break;
					
				default:
					return false;
			}
		}
		
		
		static classic() {
			const markup = `
		<div class="header">
		<p class='ref'></p>
		<p class="version">...</p>
		</div>
		
		<div class="content">
			<ol class='text'>
				<li>Loading..</li>
			</ol>
		</div>
		
		<div class="footer">
			<p>BibleUp 📖💡</p>
		</div>
		`;
		return markup;
		}
		
		
		static wiki() {
			const markup = `
	 <div class="header">
	  <p class='ref'></p>
	  <span class='version'></span>
	  <p class="close">&#x2715</p>
	 </div> 
	 
	 <div class = "content">
	 	<ol class='text'>
	   <li>Loading..</li>
	  </ol> 
	 </div>
	  
	 	<div class="footer">
	 	<p>BibleUp📖💡</p> 
	 	</div>
	 	`;
		 return markup;
		}
		
		
		static inline() {
			const markup = `
		<div class="content">
  	<ol class="text">
   	<li>Loading..</li>
  	</ol>
  </div>
 
 	<div class="footer">
  	<p>BibleUp 📖💡</p>
 	</div>
		`;
			
			return markup;
		}
		
		
	}

	let positionPopup = (e, popup) => {
		if (popup == 'classic') {
			return classic(e);
		}
		if (popup == 'inline') {
			return inline(e);
		}
		return false;
	};

		/**
		 * Adjust popup to left or right of click
		*/
	let adjustPopupToLeft = (width, rectLeft, popup, popWidth) => {
		let remainingSpace = width - rectLeft;
		if (remainingSpace > popWidth) {
			//enough space
			popup.style.left = `${rectLeft + 'px'}`;
			if (rectLeft < 0) {
				rectLeft -= rectLeft;
				adjustPopupToLeft(width, rectLeft, popup, popWidth);
			}
		} else {
			let offsetBy = popWidth - remainingSpace;
			let adjust = rectLeft - offsetBy;
			popup.style.left = `${adjust + 'px'}`;
		}
	};


	/**
	 * adjust popup to bottom or top of link according to space remaining
	*/
	let adjustPopupToBottom = (height, rectBottom, popup, popHeight) => {
		let remainingSpace_bottom = height - rectBottom;
		if (!(remainingSpace_bottom > popHeight + 100)) {
			let popTop = height - popHeight;
			let ad2 = popTop + window.scrollY - remainingSpace_bottom;
			popup.style.top = `${ad2 - 25 +'px'}`;
		}
	};


	let classic = (e) => {
		//get window dimensions
		let height = window.innerHeight;
		let width = document.documentElement.clientWidth;
		let popup = document.getElementById('bu-popup');
		let popWidth = popup.offsetWidth;
		let popHeight = popup.offsetHeight;
		
		//get bu-link rect (onClick)
		let rect = e.target.getBoundingClientRect();
		let rectTop = rect.top;
		let rectBottom = rect.bottom;
		let rectLeft = Math.round(rect.left);

		//get position of bu-link from window with scroll
		let realTop = window.scrollY + rectTop;
		
		popup.style.top = `${realTop + 25 +'px'}`;
		adjustPopupToLeft(width, rectLeft, popup, popWidth);
		adjustPopupToBottom(height, rectBottom, popup, popHeight);
	};



	//INLINE 
	let inline = (e) => {
		//get window dimensions
		let height = window.innerHeight;
		let width = document.documentElement.clientWidth;
		let popup = document.getElementById('bu-popup');
		let popWidth = popup.offsetWidth + 25;
		let popHeight = popup.offsetHeight;
		
		//get bu-link rect (onClick)
		let rect = e.target.getBoundingClientRect();
		let rectTop = rect.top;
		let rectBottom = rect.bottom;
		let rectLeft = Math.round(rect.left);
		Math.floor(rect.right);
		
		//get position of bu-link from window with scroll
		let realTop = window.scrollY + rectTop;
		
		popup.style.top = `${realTop + 25 +'px'}`;
		adjustPopupToLeft(width, rectLeft, popup, popWidth);
		adjustPopupToBottom(height, rectBottom, popup, popHeight);
	};

	/*BIBLEUP 📖💡 - fetchData
		* fetch json from api
		* api endpoint - web/getscripture.php
	*/



	let trimAll = (data) => {
		if (data != undefined) {
			let result = data.replace(/\s/g, '');
			return result;
		}
		return null;
	};
		
		
	/**
		* get json data through XMLHttpRequest
		* api endpoint - script/getscripture.php
	*/
	let fetchData = async (bibleRef, version) => {
		let book = bibleRef['book'];
		let chapter = trimAll(bibleRef['chapter']);
		let verse = trimAll(bibleRef['verse']);
			
		let a = JSON.stringify({
			book:book, 
			chapter:chapter, 
			verse:verse, 
			version:version
		});
			
		let form = new FormData();
		form.append('json', a);
			
		try {
			const response = await fetch('bibleup/script/getscripture.php', {
			 method: 'POST',
			 body: form,
			 mode: "cors",
			 cache: 'force-cache'
			});
			
			if (!response.ok) {
			 let err = (`An error has occurred: ${response.status}`);
			 throw new Error(err);
			}
			
			const text = await response.json();
			return text;
			
		} catch (error) {
			return error;
		}
	};

	console.log("BibleUP 📖💡");



	class BibleUp {
		constructor(element, options) {
			this.element = element;
			this.defaultOptions = {
				version: 'kjv', 
				linkStyle: 'classic',
				popup: 'classic',
				darkTheme: false,
				bu_ignore: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'], 
				bu_allow: []
			};
			
			if (typeof options === 'object' && options !== null) {
				this.options = {...this.defaultOptions, ...options};
			} else {
				this.options = this.defaultOptions;
			}
			
			this.regex = this.scriptureRegex(bible_abbr);
			this.mouseOnPopup = false; //if mouse is on popup
			this.popupTimer;
		}
		
		
		/**
			* {type} getter
			* {return} all options for present class instance
			*/
		get getOptions() {
			return JSON.stringify(this.options);
		}
		
		
		/**
		 * method: BibleUp Scripture Regex
		 * param(refGroup) get all abbreviations and append each with '|' to construct a regex capturing group.
		 * This regex is a combination of two regular expressions (standard Bible reference and look-behind Bible reference) using the or '|' operator
		 * Contains a total of six capturing groups. 3 for the first regex and the remaining 3 for the look-behind
		 * one set of the capturing group returns 'undefined' when the other regex is matched
		 * Regex matches: john 3:16-17, 1 Tim 5:2,5&10
		 */
		scriptureRegex(bible_abbr) {
			let refGroup = '';
		 for (let i = 0; i < bible_abbr.length; i++) {
		 	if (i == bible_abbr.length - 1) {
		 		refGroup += bible_abbr[i].a;
		 	} else {
		 		//append '|' after each abbr.
		 		refGroup += bible_abbr[i].a + '|';
		 	}
		 }
		 
		 let regex_literal = `(?:(?:(${refGroup})\\s?(\\d{1,3}))(?:(?=\\:)\\:\\s?(\\d{1,3}(?:\\s?\\-\\s?\\d{1,3})?)|))|(?<=(?:(${refGroup})\\s?(\\d{1,3}))\\:\\s?\\d{1,3}(?:\\s?\\-\\s?\\d{1,3})?(?:\\,|\\&)\\s?(?:\\d{1,3}(?:\\,|\\&)\\s?|\\d{1,3}\\s?\\-\\s?\\d{1,3}(?:\\,|\\&))*)(\\d{1,3}(?!\\s?\\-\\s?)|\\d{1,3}\\s?\\-\\s?\\d{1,3})`;
		 
		 let bible_regex = new RegExp(regex_literal, 'g');
		 return bible_regex;
		}
		
		
		/**
		 * {desc} class entry point.
		 * create instances for entire app func
		 * 
		 */
		create() {
			this.transverseTextNodes(this.element, this.regex);
			this.setStage(this.element, this.options);
		}
		
		
		/*
		This function is currently not in use. Intended use is to check whether bibleup element contains scripture references or not. Then output an error if negative but if positive proceeds to transverseTextNodes()
		
		This function is already being handled by transverseTextNodes() without displaying error
		*/
		searchScripInstances(e, regex) {
			let eContent = e.textContent;
			let matches = eContent.match(regex) || false;
			
			if (matches !== false) {
				matches.length;
				this.transverseTextNodes(e, regex);
				console.log(matches);
			} else {
				this.error('warning', "No scripture reference found in selector's text");
			}
		}
		
		
		transverseTextNodes(e, regex) {
			let type = e.nodeType;
			let match = e.textContent .match(regex) || false;
			let next;
		
			if (type == 3 && match != false) {
		 	 this.setScriptureLink(e, regex);
			} else if (type == 1) {
				//element node
				if (e = e.firstChild) {
		  	do {
		  	 next = e.nextSibling;
		  	 type = e.nodeType;
		  	 if (type == 1) {
		  	 	if (e.classList.contains('bu-link')) {
		  	 		this.modifyLink(e);
		  	 	} else if (this.validateEl(e)) {
		 	  	this.transverseTextNodes(e, regex);
		  	 	}
		  	 } else {
		  	 	this.transverseTextNodes(e, regex);
		  	 }
		  	} while (e = next);
			 }
			}
		}
		
		
		/**
		 * description: This function validates elements node before running transverseTextNodes() on subsequent child elements
		 * Returns true after successful validation else returns false 
		 */
		validateEl(e) {
			let forbidden_tags = this.options.bu_ignore;
			let allowed_tags = this.options.bu_allow;
			if (forbidden_tags.includes(e.tagName) && !allowed_tags.includes(e.tagName)) return false
			if (e.classList.contains('bu-ignore') == false)
			return true;
		}
		
		
		/**
		 * description: If element node is contains 'bu-link' class, then this function helps modify/change it styles rather than running transverseTextNodes() a second time
		 * returns same element data but with a new modified style
		 */
		modifyLink(e) {
			e.className = `bu-link ${this.options.linkStyle}`;
		}
		
		
		
		/**
		 * description: This function returns appends <cite> on text nodes with a scripture match
		 * It replace 'This text is john 3.16' with 'This text is <cite attr>John 3:16</cite>'
		 * param(node) is a text node
		 */
		setScriptureLink(node, regex) {
		 let newNode = document.createElement('div');
		 newNode.innerHTML = node.nodeValue.replace(regex, this.setLinkStyle.bind(this));
		 
		 while (newNode.firstChild) {
		  //console.log(newNode.firstChild.textContent);
		  node.parentNode.insertBefore(newNode.firstChild, node);
		 }
		 node.parentNode.removeChild(node);
		}
		
		
		
		/**
			* param(style): linkStyle from options
			* param(match) is the actual matched string. Check replace() on MDN
			* param(p1) is value of first capturing group. Pn is the capturing group for 'n'. Check replace() on MDN
			* The first three capturing groups (p1 - p3) matches a standard Bible reference (Romans 3:23-25)
			* The remaining three capturing groups matches the look-behind Bible reference (John 3:16,27,3-5 = matches 27 and 3-5)
			* returns <cite[data-*]>john 3:16</cite>
			*/
		setLinkStyle(match, p1, p2, p3, p4, p5, p6) {
			let linkStyle = this.options.linkStyle;
			let full_match = {
				'book':undefined,
				'chapter':undefined,
				'verse' :undefined
			};
			
			if (p1 != undefined) {
				//standard Bible regex
				full_match['book'] = p1;
				full_match['chapter'] = p2;
				full_match['verse'] = p3 || '1';
			} else {
				//look-behind Bible regex
				full_match['book'] = p4;
				full_match['chapter'] = p5;
				full_match['verse'] = p6;
			}
			
			let result = `
		<cite>
		<a href='#' id='bu-link-all' class='bu-link ${linkStyle}' bu-data='${JSON.stringify(full_match)}'>${match}</a>
		</cite>`;
			
			return result;
		}
		
		
		
		setStage(element, options) {
			let build = ConstructPopup.build(options);
			if (build == false) {
				this.error("BibleUp was unable to construct popup. Check to see if 'popup' option is correct");
			}
			
			let bulink = document.querySelectorAll('.bu-link');
			let popup = document.getElementById('bu-popup');
			
			bulink.forEach(link => {
				link.addEventListener('click', evt => {
					evt.preventDefault();
					evt.stopPropagation();
				});
				
				link.addEventListener('mouseenter', this.clickb.bind(this));
				
				link.addEventListener('mouseleave', this.closePopup.bind(this));
			});
			
			popup.addEventListener('mouseenter', () => {
				this.mouseOnPopup = true;
			});
			
			popup.addEventListener('mouseleave', (e) => {
				this.mouseOnPopup = false;
				this.closePopup(e);
			});
			
			let closeBtn = document.querySelector('#bu-popup .close') || false;
			if (closeBtn) {
				closeBtn.addEventListener('click', this.exitPopup.bind(this));
			}
			
			/*['mouseenter', ''].forEach(event => {
					document.documentElement.addEventListener(event, this.closePopup.bind(this), true)
				});*/
		}
		
		
	async clickb(e) {
		//clear all popupTimer;
		this.clearTimer();
		let bibleRef = e.currentTarget.getAttribute('bu-data');
		bibleRef = JSON.parse(bibleRef);
		
		
		positionPopup(e, this.options.popup);
		this.openPopup();
		
		let res = await fetchData(bibleRef, this.options.version);
		this.updatePopupData(res);
		positionPopup(e, this.options.popup);
	}



	/**
	 * (res) @param is fetch response object from php
	 * @param res contains: res.ref, res.text, res.chapter, res.verse, res.version
	 * (description) update popup data
	*/
	updatePopupData(res) {
		let popupRef = document.querySelector('#bu-popup .ref');
		let popupVersion = document.querySelector('#bu-popup .version');
		let popupText = document.querySelector('#bu-popup .text');
		
		//update
		if (popupRef) {
			popupRef.textContent = res.ref;
		}
		
		if (popupVersion) {
			popupVersion.textContent = res.version.toUpperCase();
		}
		
		popupText.setAttribute('start', res.verse);
		if (res.text == null) {
			popupText.textContent = 'This bible reference cannot be loaded.';
		} else {
			let text = res.text;
			popupText.innerHTML = '';
			text.forEach(verse => {
				popupText.innerHTML += `<li>${verse} </li>`;
			});
		}
	}
		
		
	openPopup() {
		let popup = document.getElementById('bu-popup');
		if (popup.classList.contains('bu-popup-hide')) {
			popup.classList.remove('bu-popup-hide');
		}
	}


	closePopup(e) {
		this.popupTimer = setTimeout(() => {
			if (!this.mouseOnPopup) {
				let mouseFrom = e.relatedTarget;
				if (mouseFrom.classList.contains('bu-link') == false) {
					let popup = document.getElementById('bu-popup');
					popup.classList.add('bu-popup-hide');
					this.mouseOnPopup = false;
				}
			}
		}, 50);
	}
		
		
	exitPopup() {
		let popup = document.getElementById('bu-popup');
		popup.classList.add('bu-popup-hide');
		this.mouseOnPopup = false;
	}
		

		clearTimer() {
			if (this.popupTimer) 
			clearTimeout(this.popupTimer);
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		
		
		
		
		
		
		error(msg) {
			//console.log(msg);
			//return false;
			throw new Error(msg);
		}
	}

	return BibleUp;

})));
var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("要進行三轉的玩家，可找我領取力量項鍊#b#L1#領取力量項鍊");
	}
function action(mode, type, selection) {
    if (mode == 1) {
	switch (selection) {
	    case 0:
		 case 1:
            if(cm.haveItem(4031057)){
					cm.sendOk("您已經領取過 #b力量項鍊#i4031057#了");
					cm.dispose();
                cm.dispose();
            }else{
                cm.gainItem(4031057, 1);
				cm.sendOk("#b力量項鍊#i4031057#領取成功!");
                cm.dispose();
           
		}	
	}
    }
	 cm.dispose();
}
var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("�n�i��T�઺���a�A�i��ڻ���O�q����#b#L1#����O�q����");
	}
function action(mode, type, selection) {
    if (mode == 1) {
	switch (selection) {
	    case 0:
		 case 1:
            if(cm.haveItem(4031057)){
					cm.sendOk("�z�w�g����L #b�O�q����#i4031057#�F");
					cm.dispose();
                cm.dispose();
            }else{
                cm.gainItem(4031057, 1);
				cm.sendOk("#b�O�q����#i4031057#������\!");
                cm.dispose();
           
		}	
	}
    }
	 cm.dispose();
}
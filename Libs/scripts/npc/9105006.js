var status;

function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == 1 || mode == 0)
                status++;
        else {
                cm.dispose();
                return;
        }

        if (status == 0){
                cm.sendNext("#e我即將給你#r轉生獎(30次)#k");
        } else if (status == 1) {
          var NPSGPA = cm.getNPSGFS();
		if(NPSGPA == 16 ){
                cm.sendOk("#b你可能尚未到達標準 或 已領過轉生獎(30次)囉,重複領會被鎖定IP以至於無法進行遊戲喔!!#k");
                cm.setNPSGFS();
                cm.dispose();
             }else if (cm.getChar().getLevel()==10) {
                cm.sendOk("#b恭喜您獲得轉生獎(30次)#k");
                cm.gainItem(4000038 ,6);
                            
               cm.setNPSGFS(16);
  cm.takeNPSGFS(16);  
               cm.worldMessage("『恭喜訊息』：恭喜 "+ cm.getChar().getName() +"  獲得轉生獎(30次)");
                //cm.warp(910000000);
                cm.dispose();
           
            } else {
                cm.sendOk("你可能尚未到達標準 或 已領過轉生獎(30次)囉,重複領會被鎖定IP以至於無法進行遊戲喔!!");
               // cm.warp(910000000);
                cm.dispose();
            }
        }
}
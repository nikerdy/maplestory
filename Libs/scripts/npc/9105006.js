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
                cm.sendNext("#e�ڧY�N���A#r��ͼ�(30��)#k");
        } else if (status == 1) {
          var NPSGPA = cm.getNPSGFS();
		if(NPSGPA == 16 ){
                cm.sendOk("#b�A�i��|����F�з� �� �w��L��ͼ�(30��)�o,���ƻ�|�Q��wIP�H�ܩ�L�k�i��C����!!#k");
                cm.setNPSGFS();
                cm.dispose();
             }else if (cm.getChar().getLevel()==10) {
                cm.sendOk("#b���߱z��o��ͼ�(30��)#k");
                cm.gainItem(4000038 ,6);
                            
               cm.setNPSGFS(16);
  cm.takeNPSGFS(16);  
               cm.worldMessage("�y���߰T���z�G���� "+ cm.getChar().getName() +"  ��o��ͼ�(30��)");
                //cm.warp(910000000);
                cm.dispose();
           
            } else {
                cm.sendOk("�A�i��|����F�з� �� �w��L��ͼ�(30��)�o,���ƻ�|�Q��wIP�H�ܩ�L�k�i��C����!!");
               // cm.warp(910000000);
                cm.dispose();
            }
        }
}
function start() {
                cm.sendSimple ("�z�n�ݭn����O!? ���e�p�U~#k\r\n#k#L0#�ޯ��I��#r(�ݪ�O5������)")}

function action(mode, type, selection) {
                cm.dispose();

        switch(selection){ 
                case 0:
                        if (cm.getMeso()>=500000000){ 
                        cm.gainMeso(-500000000);
                        cm.maxAllSkills();
                        cm.sendOk("#roH�I#n �ޯ�w�g�I���F!");
                        cm.dispose();
                        }else{
                        cm.sendOk("�^�h�a!��5���A�Ӯ@~");
                        cm.dispose();	
                        }
                  break;

      }
}
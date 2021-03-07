function start() {
                cm.sendSimple ("您好需要什麼呢!? 內容如下~#k\r\n#k#L0#技能點滿#r(需花費5億楓幣)")}

function action(mode, type, selection) {
                cm.dispose();

        switch(selection){ 
                case 0:
                        if (cm.getMeso()>=500000000){ 
                        cm.gainMeso(-500000000);
                        cm.maxAllSkills();
                        cm.sendOk("#roH！#n 技能已經點滿了!");
                        cm.dispose();
                        }else{
                        cm.sendOk("回去吧!有5億再來哦~");
                        cm.dispose();	
                        }
                  break;

      }
}
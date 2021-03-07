/*
	Create by �۫H�O�@�ؽ�`
	2014/04/23 23:01
*/

var status = 0;

var CSPoints,CSRate;
var TownMap,MonsterMap,BossMap;
var SkillBooks;
var SelectedSkillBook = -1;
var ChairList;
var ScrollSTRList,ScrollDEXList,ScrollINTList,ScrollLUKList;
var ScrollATT1List,ScrollATT2List,ScrollMATTList,ScrollEQATTList;
var RingList,EarringList,CapeList;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == -2 || status == -1) {
			cm.dispose();
		} else if (status == 0) {
			cm.sendSimple("�˷R�����a #r#h ##k �z�n�A\r\n�аݱz�ݭn����A�ȩO�H" + 
						  
						  "\r\n\r\n#L-1#�ССССССС���¾ & �ǰe�ССССССС�\r\n" +
						  "#r#L1#�a�϶ǰe#l�@#L2#1.2 ����¾ (�g�T3.4��)#l" +
						 
						 
						  "\r\n\r\n#L-1#�ССССССС� �@�� �L�@ �ССССССС�\r\n" +
						  "#b#L17#���ⲧ�`�״_#l#k");
		} else if (status == 1) {
			switch(selection) {
				case 0:
					status = 10;
					cm.sendYesNo("�аݬO�n�i��#r�I���ʶR#k�ܡH");
					break;
				case 1:
					status = 30;
					cm.sendSimple("�п�ܱ��i��ǰe�������G\r\n" + 
								  "\r\n#b#L0#�����a�϶ǰe\r\n#L1#�m�\�a�϶ǰe\r\n#L2#BOSS�a�϶ǰe#k");
					break;
				case 2:
					status = 60;
					cm.sendYesNo("�аݬO�n�i��#r��¾#k�ܡH");
					break;
				case 4:
					status = 100;
					cm.sendSimple("�п�ܱ��i�檺�ާ@�G\r\n" + 
								  "\r\n#b#L0#�C��ñ��\r\n\r\n#L1#����s��ñ����y���\r\n\r\n#L2#����ñ��d��#k");
					break;
				case 5:
					status = 130;
					cm.sendSimple("�п�ܱ��i�檺�ާ@�G\r\n" +
								  "\r\n#b#L0#�d�ݤO�q���b���v\r\n#L1#�d�ݱӱ����b���v\r\n#L2#�d�ݴ��O���b���v\r\n#L3#�d�ݩ��B���b���v" + 
								  "\r\n#L4#�d�ݪ��z�������b���v(�Ĥ@��)\r\n#L5#�d�ݪ��z�������b���v(�ĤG��)\r\n#L6#�d���]�k�������b���v\r\n#L7#�d�ݸ˳Ƨ������b���v" + 
								  "\r\n\r\n#L8#�i��O�q���b��J\r\n#L9#�i��ӱ����b��J\r\n#L10#�i�洼�O���b��J\r\n#L11#�i�橯�B���b��J" + 
								  "\r\n#L12#�i�檫�z�������b��J(�Ĥ@��)\r\n#L13#�i�檫�z�������b��J(�ĤG��)\r\n#L14#�i���]�k�������b��J\r\n#L15#�i��˳Ƨ������b��J#k");
					break;
				case 6:
					status = 150;
					cm.sendSimple("�п�ܱ��i�檺�ާ@�G\r\n" +
								  "\r\n#b#L0#�d�ݦU�Ȥl���v#l\r\n\r\n#L1#�i��Ȥl��J#l#k");
					break;
				case 7:
					status = 170;
					cm.sendSimple("�п�ܱ��i�檺�ާ@�G\r\n" +
								  "\r\n#b#L0#�d�ݦU�٫����v#l\r\n\r\n#L1#�d�ݦU�ܭ����v#l\r\n\r\n#L2#�d�ݦU�������v#l\r\n\r\n#L3#�i��٫���J#l\r\n\r\n#L4#�i��ܭ���J#l\r\n\r\n#L5#�i�������J#l#k");
					break;
				case 8:
					status = 190;
					if (cm.getPlayerStat("LVL") >= 200) {
						var PlayerJob = cm.getJob();
						var selStr = "�п�ܱ���ͪ�¾�~�G\r\n\r\n#b";
						if (PlayerJob < 1000) {
							selStr += "#L0#�_�I�a#l#k";
						} else if (PlayerJob >= 1000 && PlayerJob < 2000) {
							selStr += "#L1#�Ӯa�M�h��#l#k";
						} else if (PlayerJob >= 2000 && PlayerJob < 3000) {
							selStr += "#L2#�g�T�i�h#l\r\n\r\n#L3#�s�]�ɤh#l\r\n\r\n#L4#���F�C�L#l\r\n\r\n#L5#�ۼv�L�s#l#k";
						} else if (PlayerJob >= 3000 && PlayerJob < 4000) {
							selStr += "#L6#�Һ��Ův#l\r\n\r\n#L7#�g�\�y�H#l\r\n\r\n#L8#���Ҿԯ�#l\r\n\r\n#L9#�c�]����#l#k";
						} else {
							cm.sendOk("�z�|���ŦX��ͪ�¾�~�C");
							cm.dispose();
							break;
						}
						cm.sendSimple(selStr);
					} else {
						cm.sendOk("�z�|���F���ʵ��A�L�k�i����͡C");
						cm.dispose();
					}
					break;
				case 9:
					status = 210;
					cm.sendSimple("�п�ܱ��i�檺�ާ@�G\r\n" +
								  "\r\n#b#L0#�����I��#l\r\n\r\n#L1#���������I��#l\r\n\r\n#L2#���M�I��#l#k");
					break;
				case 17:
					status = 900;
					cm.sendSimple("�п�ܱ��i�檺�ާ@�G\r\n" +
								  "\r\n#b#L0#��O�Ȳ��`�״_#l");
					break;
				case 20:
					cm.openShop(9330000);
					cm.dispose();
					break;
				case 21:
					cm.openShop(57);
					cm.dispose();
					break;
				default :
					cm.sendOk("�z���G�����~���ﶵ�F��~");
					cm.dispose();
					break;
			}
		} else if (status == 9 || status == 10) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 11) { //�I���ʶR�߰�
			CSPoints = Array(500, 1000, 2000, 5000, 10000, 50000);
			CSRate = 10000;
			var selStr = "�˷R�����a #r#h ##k �z�n�A\r\n�аݱz�Q�n�ʶR�h���I�ƩO�H\r\n�ثe�I���ײv�O�G " + CSRate + " �����I�� 1 �I�I��\r";
			
			for (var i=0;i<CSPoints.length;i++) {
				selStr += "\r\n#b#L" + i + "#" + CSPoints[i] + "�I�G" + CSPoints[i] + "�U����#k";
			}
			cm.sendSimple(selStr);
		} else if (status == 12) { //�I���ʶR���
			if (cm.getMeso() >= CSPoints[selection]*CSRate) {
				cm.gainMeso(-(CSPoints[selection]*CSRate));
				cm.getPlayer().modifyCSPoints(4, CSPoints[selection], false);
				cm.sendOk("������\�I");
				cm.worldMessage(0," ���a �u" + cm.getName() + "�v �ʶR�F " + CSPoints[selection] + " �I��~�@^_^");
			} else {
				cm.sendOk("�z�����������I");
			}
			cm.dispose();
		} else if (status == 29 || status == 30 || status == 32 || status == 33 || status == 35 || status == 36 || status == 38 || status == 39) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 31) { //�a�϶ǰe
			switch (selection) {
				case 0:
					status = 33;
					TownMap = Array(1000000, 104000000, 100000000, 101000000, 102000000, 103000000, 120000000, 200000000, 211000000, 240000000, 220000000, 540000000, 550000000, 221000000, 222000000, 230000000, 103040000, 130000200, 140000000, 250000000, 251000000, 260000000, 261000000, 270000000, 300000000, 310000000);
					var TownMapName = Array("�����q", "���h�Q�ȴ�", "�}�b���", "�]�k�˪L", "�i�h����", "�Z������", "�H���q", "�ѪŤ���", "�B�쳷��", "�����", "���㫰", "���߰ӰȰ�", "���Ӧ�ȳ��|��y��", "�a�y�����`��", "���ܧ�", "���@��", "�x�_101", "�C�p��","�箦�q", "���P��", "�Z�����", "�ǧƨF�z", "���ɴ��ȫ�", "�ɶ�����", "�Ȯ�����a", "�J�w�����Z");
					
					var selStr = "�˷R�����a #r#h ##k �z�n�A\r\n�п�ܱz�n�e�����a�ϡG\r\n#b";
					for (var i = 0; i < TownMapName.length; i++) {
						selStr += "\r\n#L" + i + "#" + TownMapName[i] + "#l";
					}
					cm.sendSimple(selStr);
					break;
				case 1:
					status = 36;
					MonsterMap = Array(541000300, 220050300, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004,101030104, 105100100, 211041100, 670010000, 310040200, 219020000);
					var MonsterMapName = Array("�����p�|3", "�ɶ��q�D", "�M�I����I", "���F��2", "�ڤۼֶ�J�f", "�l���ø�", "�t�]�Q�L", "�Z���w", "���o������a", "�������h", "���`�˪LI","���ڴ����������");
					
					var selStr = "�˷R�����a #r#h ##k �z�n�A\r\n�п�ܱz�n�e�����a�ϡG\r\n#b";
					for (var i = 0; i < MonsterMapName.length; i++) {
						selStr += "\r\n#L" + i + "#" + MonsterMapName[i] + "#l";
					}
					cm.sendSimple(selStr);
					break;
				case 2:
					status = 39;
					BossMap = Array(230040420, 801040004, 211042300, 240050400, 240050400, 270050000);
					var BossMapName = Array("���㼹", "�¹D����", "���z���]", "�t���s��","�V�P�t���s��", "�֥d��");
					
					var selStr = "�˷R�����a #r#h ##k �z�n�A\r\n�аݱz�n�D�ԭ��� BOSS �O�H\r\n#b";
					for (var i=0;i < BossMapName.length;i++) {
						selStr += "\r\n#L" + i + "#" + BossMapName[i] + "#l";
					}
					cm.sendSimple(selStr);
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 34) { //�����a�϶ǰe
			cm.warp(TownMap[selection], 0);
			cm.dispose();
		} else if (status == 37) { //�m�\�a�϶ǰe
			cm.warp(MonsterMap[selection], 0);
			cm.dispose();
		} else if (status == 40) { //BOSS�a�϶ǰe
			cm.warp(BossMap[selection], 0);
			cm.dispose();
		} else if (status == 59 || status == 60) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 61) {//�ˬd��¾���
			var selStr = "�˷R�����a #r#h ##k �z�n�A\r\n �аݱz�n�ন����¾�~�O�H\r\n\r\n\r\n#b";
			if (cm.getJob() == 0 && cm.getPlayerStat("LVL") >= 8 && cm.getPlayerStat("LVL") <10) {
				selStr += "#L0#�k�v#l";
			} else if (cm.getJob() == 0 && cm.getPlayerStat("LVL") >= 10) {
				selStr += "#L0#�k�v#l#L1#�C�h#l#L2#�}�b��#l#L3#�s��#l#L4#���s#l#k";
			} else if (cm.getJob() == 100 && cm.getPlayerStat("LVL") >= 30) {
				selStr += "#L5#�g�Ԥh#l#L6#�����M�h#l#L7#�j�M�L#l#k";
			} else if (cm.getJob() == 200 && cm.getPlayerStat("LVL") >= 30) {
				selStr += "#L8#�Ův(��.�r)#l#L9#�Ův(�B.�p)#l#L10#���Q#l#k";
			} else if (cm.getJob() == 300 && cm.getPlayerStat("LVL") >= 30) {
				selStr += "#L11#�y�H#l#L12#���}��#l#k";
			} else if (cm.getJob() == 400 && cm.getPlayerStat("LVL") >= 30) {
				selStr += "#L13#���#l#L14#�L�s#l#k";
			} else if (cm.getJob() == 500 && cm.getPlayerStat("LVL") >= 30) {
				selStr += "#L15#����#l#L16#�j��#l#k";
                        } else if (cm.getJob() == 2110 && cm.getPlayerStat("LVL") >= 70) {
				selStr += "#L17#�g�T�i�h�T��#l";
                        } else if (cm.getJob() == 2111 && cm.getPlayerStat("LVL") >= 120) {
				selStr += "#L18#�g�T�i�h�|��#l";
			} else {
				cm.sendOk("��NPC���\��ثe�ä��A�X�z�C");
				cm.dispose();
			}
			cm.sendSimple(selStr);
		} else if (status == 62) {//�i����¾
			var JobNumber = Array(200, 100, 300, 400, 500, 110, 120, 130, 210, 220, 230, 310, 320, 410, 420, 510, 520, 2111, 2112);
			cm.changeJob (JobNumber[selection]);
			cm.sendOk("��¾���\�I");
			cm.dispose();
		} else if (status == 79 || status == 80 || status == 82 || status == 83) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 81) {//�I���ޯ���ѿ��
			status = 83;
			SkillBooks = Array(2280003, 2280004, 2280005, 2280006, 2280007, 2280009, 2280010, 2280012, 2280013, 2280014, 2280015, 2280016, 2280017, 2280018, 2280019, 2280026, 2280027, 2280028, 2280029, 2280030, 2280031);
			var selStr = "�˷R�����a #r#h ##k �z�n�A\r\n�п�ܱz�n�I�������ѡG\r\n#b";
			
			for (var i = 0; i < SkillBooks.length; i++) {
				selStr += "\r\n#L" + i + "##i" + SkillBooks[i] + ":# #t" + SkillBooks[i] + ":##l\r\n";
			}
			cm.sendSimple(selStr);
		} else if (status == 84) {//�I���ޯ���ѽT�{
			SelectedSkillBook = SkillBooks[selection];
			cm.sendSimple("�z�T�w�n�I�� #i" + SkillBooks[selection] + ":# #t" + SkillBooks[selection] + ":##l�H" + 
						  "\r\n\r\n#r#L0#�T�w\r\n\r\n#b#L1#����#k");
		} else if (status == 85) {//�I���ޯ���Ѱ���
			switch (selection) {
				case 0:
					if (cm.haveItem(4000000, 3) && cm.haveItem(4000016, 3) && cm.haveItem(4000019, 3) && cm.getMeso() >= 1000000) {
						cm.gainItem(SelectedSkillBook, 1);
						cm.gainItem(4000000, -3);
						cm.gainItem(4000016, -3);
						cm.gainItem(4000019, -3);
						cm.gainMeso(-1000000);
						cm.worldMessage(0," ���a �u" + cm.getName() + "�v �I���F �u" + cm.getItemName(SelectedSkillBook) + "�v �S���Ѫ��P�ǭ̡A��L�N��F�@^_^");
						cm.sendOk("�I�����\�I");
					} else {
						cm.sendOk("�һݪ��~�����I");
					}
					cm.dispose();
					break;
				case 1:
					status = -1;
					cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 99 || status == 100 || status == 102 || status == 103) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 101) {//�C��ñ��
			var year = cm.getCurrentDate_Year();
			var month = cm.getCurrentDate_Month();
			var day = cm.getCurrentDate_Day();
			switch (selection) {
				case 0:
					var checkDailyTask = cm.getDailyTask(year, month, day);
					if (checkDailyTask == 1) {
						if (cm.canHoldSlots(3)) {
							cm.setDailyTask(year, month, day);
							cm.gainMeso(2000000);
							cm.gainItem(2050004, 30);
							cm.gainItem(2000004, 50);
							cm.gainItem(2000005, 25);
							cm.gainItem(4001618, 1);
							cm.gainItem(5390000, 3);
							cm.gainItem(5390001, 3);
							cm.gainItem(5390002, 3);
							cm.getPlayer().modifyCSPoints(4, 200, false);
							cm.sendOk("ñ�즨�\�I\r\n\r\nñ����y�G\r\n\r\n���� #r200�U#k\r\n�I�� #r200�I#k\r\n" + 
									  "\r\n#i2050004:##t2050004:# #r30�~#k\r\n#i2000004:##t2000004:# #r50�~#k" + 
									  "\r\n#i2000005:##t2000005:# #r25�~#k\r\n#i4001618:##t4001618:#  #r1��#k" + 
									  "\r\n#i5390000:##t5390000:#  #r3��#k\r\n#i5390001:##t5390001:#  #r3��#k" + 
									  "\r\n#i5390002:##t5390002:#  #r3��#k");
							cm.dispose();
						} else {
							cm.sendOk("�нT�{�Ҧ����O�_�� 3 ��H�W���Ŷ��C");
							cm.dispose();
						}
					} else if (checkDailyTask == 0) {
						cm.sendOk("����wñ��L�P�A���ѦA�ӧa ^_^");
						cm.dispose();
					} else {
						cm.sendOk("���������~�A�гq���޲z���A���¡C");
						cm.dispose();
					}
					break;
				case 1:
					status = 103;
					cm.sendSimple("�п�ܱ�������y���s��ñ��ѼơG\r\n" + 
								  "\r\n#b#L0#3��\r\n\r\n#L1#7��\r\n\r\n#L2#15��\r\n\r\n#L3#28��");
					break;
				case 2:
					var days;
					switch (month) {
						case 1:
						case 3:
						case 5:
						case 7:
						case 8:
						case 10:
						case 12:
							days = 31;
							break;
						case 4:
						case 6:
						case 9:
						case 11:
							days = 30;
							break;
						case 2:
							if ((year%4) == 0 && (year%100) != 0 || (year%400) == 0) {
								days = 29;
							} else {
								days = 28;
							}
							break;
					}
					var selStr = "����ñ�쪬�p�G\r\n";
					for (var i=1;i<=days;i++) {
						if (cm.getDailyTask(year, month, i) == 0) {
							selStr += "\r\n" + month + " �� " + i + " ��G#r�wñ��#k";
						} else {
							selStr += "\r\n" + month + " �� " + i + " ��G#b��ñ��#k";
						}
					}
					cm.sendOk(selStr);
					cm.dispose();
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 104) {//�s��ñ�������y
			var year = cm.getCurrentDate_Year();
			var month = cm.getCurrentDate_Month();
			var day = cm.getCurrentDate_Day();
			var days,deny = 0,denycheck = -1,result = 0,check;
			switch (selection) {
				case 0:
					days = 3;
					break;
				case 1:
					days = 7;
					break;
				case 2:
					days = 15;
					break;
				case 3:
					days = 28;
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
			for (var i=day;i>0;i--) {
				check = cm.getDailyTaskReward(year, month, i);
				if (check > selection) {
					deny = 1;
					cm.sendOk("�z�w��L�s��ñ�� " + days + " �Ѫ����y�I");
					cm.dispose();
				} else if (check == selection) {
					denycheck = 1;
				}
			}		
			if (deny == 1) {
				cm.sendOk("���������~�A�гq���޲z���A���¡C");
				cm.dispose();
			} else {
				if (denycheck == -1) {//���ŦX������
					cm.sendOk("�z�|���ŦX����s��ñ�� " + days + " �Ѽ��y�����I");
					cm.dispose();
				} else {
					for (var i=day;i>=days;i--) {//���i���ˬd
						result = 0;
						for (var t=0;t<days;t++) {
							if (cm.getDailyTaskReward(year, month, i-t) != selection) {
								break;
							}
							result++;
						}
						if (result >= days) {//�ŦX���
							for (;days>0;i--,days--) {//������y�O���]�s
								cm.setDailyTaskReward(year, month, i, selection+1);
							}
							switch (selection) {//���y�o�e
								case 0:
									break;
								case 1:
									cm.getItem(4032056, 1);
									break;
								case 2:
									cm.getItem(4032056, 2);
									break;
								case 3:
									cm.getItem(4032056, 3);
									break;
								default :
									cm.sendOk("���������~�A�гq���޲z���A���¡C");
									cm.dispose();
									break;
							}
							cm.sendOk("���\�I");
							cm.dispose();
						}
					}
					cm.sendOk("�z�|���ŦX������Añ�챡�p�ШϥΡu����ñ��d�ߡv�C");
					cm.dispose();
				}
			}
		} else if (status == 129 || status == 130) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 131) {//���b��J
			var ScrollList = new Array();
			switch (selection) {
				case 0://ScrollSTRList
				case 8:
					ScrollList[0] = new Array(2040406, 2040407, 2040417, 2040418, 2040419, 2040431, 2040432, 2040530, 2040531, 2040532, 2040533, 2040534, 2040540, 2040541, 2040837, 2040929, 2040930, 2040932, 2040933, 2040941, 2040942, 2041012, 2041013, 2041014, 2041034, 2041035, 2041050, 2041051, 2041059, 2041100, 2041101, 2041102, 2041112, 2041113, 2041300, 2041301, 2041302, 2041312, 2041313, 2049107, 2049200, 2049201, 2046200, 2046204, 2046300, 2046304, 2046208, 2046314, 2046223);
					break;
				case 1://ScrollDEXList
				case 9:
					ScrollList[1] = new Array(2040027, 2040028, 2040029, 2040030, 2040031, 2040043, 2040044, 2040105, 2040106, 2040108, 2040109, 2040111, 2040200, 2040203, 2040306, 2040307, 2040316, 2040317, 2040318, 2040329, 2040335, 2040336, 2040500, 2040501, 2040502, 2040506, 2040508, 2040509, 2040522, 2040523, 2040538, 2040542, 2040610, 2040611, 2040612, 2040613, 2040614, 2040623, 2040624, 2040625, 2040626, 2040627, 2040635, 2040636, 2040700, 2040701, 2040702, 2040709, 2040712, 2040713, 2040718, 2040719, 2040720, 2040721, 2040722, 2040723, 2040740, 2040755, 2040800, 2040801, 2040802, 2040806, 2040808, 2040809, 2040819, 2040820, 2040829, 2040833, 2041018, 2041019, 2041020, 2041038, 2041039, 2041054, 2041055, 2041061, 2041106, 2041107, 2041108, 2041116, 2041117, 2041306, 2041307, 2041308, 2041316, 2041317, 2047202, 2047302, 2048012, 2049110, 2049202, 2049203, 2040840, 2046206, 2046302, 2046306, 2046210, 2046316, 2046225);
					break;
				case 2://ScrollINTList
				case 10:
					ScrollList[2] = new Array(2040012, 2040013, 2040024, 2040025, 2040026, 2040112, 2040205, 2040206, 2040207, 2040208, 2040209, 2040300, 2040301, 2040302, 2040303, 2040304, 2040305, 2040313, 2040314, 2040315, 2040330, 2040333, 2040334, 2040512, 2040513, 2040514, 2040518, 2040519, 2040526, 2040527, 2041015, 2041016, 2041017, 2041036, 2041037, 2041052, 2041053, 2041060, 2041103, 2041104, 2041105, 2041114, 2041115, 2041303, 2041304, 2041305, 2041314, 2041315, 2047201, 2047301, 2048011, 2049109, 2049204, 2049205, 2046201, 2046205, 2046301, 2046305, 2046209, 2046315, 2046013, 2046224);
					break;
				case 3://ScrollLUKList
				case 11:
					ScrollList[3] = new Array(2040317, 2040320, 2040321, 2040322, 2040323, 2040331, 2040337, 2040338, 2040410, 2040411, 2040412, 2040413, 2040414, 2040423, 2040424, 2040425, 2040426, 2040427, 2040435, 2040436, 2040515, 2040516, 2040517, 2040520, 2040521, 2040528, 2040529, 2040906, 2040907, 2040923, 2040924, 2040925, 2040937, 2040938, 2041021, 2041022, 2041023, 2041040, 2041041, 2041056, 2041057, 2041062, 2041109, 2041110, 2041111, 2041118, 2041119, 2041309, 2041310, 2041311, 2041318, 2041319, 2047203, 2047303, 2048013, 2049108, 2049206, 2049207, 2046203, 2046207, 2046303, 2046307, 2046211, 2046317, 2046226);
					break;
				case 4://ScrollATT1List
				case 12:
					ScrollList[4] = new Array(2043000, 2043001, 2043002, 2043003, 2043004, 2043005, 2043011, 2043012, 2043013, 2043022, 2043023, 2043100, 2043101, 2043012, 2043103, 2043104, 2043105, 2043106, 2043107, 2043108, 2043117, 2043120, 2044000, 2044001, 2044002, 2044003, 2044004, 2044005, 2044006, 2044007, 2044008, 2044015, 2044025, 2044028, 2044100, 2044101, 2044103, 2044104, 2044106, 2044107, 2044108, 2044117, 2044120, 2044300, 2044302, 2044303, 2044304, 2044305, 2044306, 2044307, 2044308, 2044317, 2044320, 2044400, 2044401, 2044402, 2044403, 2044404, 2044405, 2044406, 2044407, 2044408, 2044417, 2044420, 2046000, 2046002, 2046100, 2046101, 2046102, 2046103, 2047003, 2047103, 2046004, 2046005, 2046104, 2046105, 2046112, 2043200, 2043202, 2043203, 2043206, 2043207, 2043208, 2043217, 2043220, 2043300);
					break;
				case 5://ScrollATT2List
				case 13:
					ScrollList[5] = new Array(2043301, 2043302, 2043303, 2043304, 2043305, 2043306, 2043307, 2043308, 2043312, 2043313, 2044200, 2044201, 2044202, 2044203, 2044204, 2044205, 2044206, 2044207, 2044217, 2044220, 2044500, 2044501, 2044502, 2044503, 2044504, 2044505, 2044506, 2044507, 2044508, 2044512, 2044513, 2044600, 2044601, 2044602, 2044603, 2044604, 2044605, 2044606, 2044607, 2044608, 2044612, 2044613, 2044700, 2044701, 2044702, 2044703, 2044704, 2044705, 2044706, 2044707, 2044708, 2044712, 2044713, 2044801, 2044802, 2044803, 2044804, 2044810, 2044811, 2044812, 2044815, 2044817, 2044900, 2044901, 2044902, 2044903, 2044904, 2044905, 2044906, 2044907, 2044908, 2044910, 2043400, 2043401, 2043402, 2043403, 2043404, 2045200, 2045201, 2045202, 2045203, 2045204, 2045205, 2045206, 2045207, 2045208);
					break;
				case 6://ScrollMATTList
				case 14:
					ScrollList[6] = new Array(2043006, 2043007, 2043008, 2043009, 2043010, 2043700, 2043701, 2043702, 2043703, 2043704, 2043705, 2043706, 2043707, 2043708, 2043711, 2043712, 2043713, 2043714, 2043800, 2043801, 2043802, 2043803, 2043804, 2043805, 2043806, 2043807, 2043808, 2043812, 2043813, 2043814, 2046001, 2046003, 2046007, 2046013, 2046015);
					break;
				case 7://ScrollEQATTList
				case 15:
					ScrollList[7] = new Array(2040758, 2040759, 2040760, 2040803, 2040804, 2040805, 2040807, 2040810, 2040811, 2040821, 2040822, 2040826, 2040830, 2040834, 2040914, 2040915, 2040916, 2040917, 2040814, 2040815, 2040816, 2040817, 2040818, 2040918, 2040919, 2040920, 2040921, 2040922);
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
			switch (selection) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					var selStr = "�U���b���v�p�U�G\r\n\r\n";
					for (var i=0;i < ScrollList[selection].length;i++) {
						selStr += "#i" + ScrollList[selection][i] + ":# #t" + ScrollList[selection][i] + ":#  #b" + (1/ScrollList[selection].length*100).toFixed(2) +"%#k\r\n\r\n";
					}
					cm.sendOk(selStr);
					cm.dispose();
					break;
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
					if (cm.haveItem(5220000)) {
						var item;
						item = cm.gainGachaponItem(ScrollList[selection-8][Math.floor(Math.random() * ScrollList[selection-8].length)], 1);
						
						if (item != -1) {
							cm.gainItem(5220000, -1);
							cm.sendOk("�z��o�F #r#i" + item + ":#  #t" + item + ":##k ���b�@�i�C");
							cm.worldMessage(0," ���a �u" + cm.getName() + "�v �ϥ���J�����F �u" + cm.getItemName(item) + "�v �A�j�a���ߥL��~�@^_^");
						} else {
							cm.sendOk("�нT�{�z���W�Ҧ����O�_�U�� 1 ��H�W���Ŷ��C");
						}
					} else {
						cm.sendOk("�z���W�S����J���A��J��i��ӫ��ʶR�A\r\n��� #rETC/Game#k ���A�ï��z�C����� ^_^");
					}
					cm.dispose();
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 149 || status == 150) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 151) {//�Ȥl��J
			switch (selection) {
				case 0:
				case 1:
					ChairList = Array(3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 3010001, 
							  3010002, 3010003, 3010004, 3010005, 3010006, 3010007, 3010008, 3010009, 3010010, 3010011, 3010012, 3010013, 3010014, 3010015, 3010016, 3010017, 3010018, 3010019, 3010021, 3010022, 3010023, 3010024, 3010025, 3010026, 3010028, 3010035, 3010036, 3010040, 3010041, 3010043, 3010045, 3010046, 3010047, 3010049, 3010052, 3010053, 3010055, 3010057, 3010058, 3010060, 
							  3010061, 3010062, 3010063, 3010064, 3010065, 3010066, 3010067, 3010068, 3010069, 3010071, 3010072, 3010073, 3010075, 3010077, 3010080, 3010085, 3010092, 3010093, 3010095, 3010096, 3010097, 3010098, 3010099, 3010101, 3010106, 3010107, 3010108, 3010109, 3010110, 3010111, 3010112, 3010113, 3010114, 3010115, 3010116, 3010117, 3010118, 3010119, 3010120, 3010123, 
							  3010124, 3010125, 3010126, 3010127, 3010128, 3010129, 3010130, 3010131, 3010132, 3010133, 3010134, 3010136, 3010137, 3010138, 3010139, 3010140, 3010141, 3010142, 3010149, 3010151, 3010152, 3010154, 3010155, 3010156, 3010157, 3010161, 3010162, 3010166, 3010168, 3010169, 3010170, 3010171, 3010172, 3010173, 3010174, 3010175, 3010177, 3010179, 3010180, 3010181, 
							  3010183, 3010184, 3010185, 3010186, 3010188, 3010189, 3010191, 3010194, 3010196, 3010197, 3010200, 3010201, 3010202, 3010203, 3010205, 3010206, 3010207, 3010208, 3010211, 3010215, 3010216, 3010218, 3010219, 3010222, 3010224, 3010225, 3010228, 3010229, 3010230, 3010231, 3010232, 3010233, 3010234, 3010235, 3010236, 3010237, 3010238, 3010239, 3010240, 3010241, 
							  3010242, 3010243, 3010244, 3010245, 3010246, 3010247, 3010248, 3010249, 3010250, 3010251, 3010252, 3010253, 3010254, 3010255, 3010256, 3010257, 3010282, 3010283, 3010284, 3010285, 3010286, 3010287, 3010288, 3010289, 3010290, 3010296, 3010297, 3010298, 3010301, 3010302, 3010307, 3010308, 3010313, 3010314, 3010315, 3010316, 3010317, 3010318, 3010319, 3010320, 
							  3010321, 3010322, 3010354, 3010355, 3010358, 3010359, 3010360, 3010364, 3010372, 3010399, 3010402, 3010403, 3010404, 3010410, 3010422, 3010424, 3010425);
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}		
			switch (selection) {
				case 0:
					var selStr = "�U�Ȥl���v�p�U�G\r\n\r\n";
					var SkyBlueChair = 0;
					for (var i=0;ChairList[i]==3010001;i++) {}
					selStr = selStr + "#i3010001:# #t3010001:#  #b" + (i/ChairList.length*100).toFixed(2) +"%#k\r\n\r\n";
					for (; i < ChairList.length; i++) {
						selStr += "#i" + ChairList[i] + ":# #t" + ChairList[i] + ":#  #b" + (1/ChairList.length*100).toFixed(2) +"%#k\r\n\r\n";
					}
					cm.sendOk(selStr);
					cm.dispose();
					break;
				case 1:
					if (cm.haveItem(5220000)) {
						var item;
						item = cm.gainGachaponItem(ChairList[Math.floor(Math.random() * ChairList.length)], 1);
						
						if (item != -1) {
							cm.gainItem(5220000, -1);
							cm.sendOk("�z��o�F #r#i" + item + ":#  #t" + item + ":##k �Ȥl�@�i�C");
							cm.worldMessage(0," ���a �u" + cm.getName() + "�v �ϥ���J�����F �u" + cm.getItemName(item) + "�v �A�j�a���ߥL��~�@^_^");
						} else {
							cm.sendOk("�нT�{�z���W�Ҧ����O�_�U�� 1 ��H�W���Ŷ��C");
						}
					} else {
						cm.sendOk("�z���W�S����J���A��J��i��ӫ��ʶR�A\r\n��� #rETC/Game#k ���A�ï��z�C����� ^_^");
					}
					cm.dispose();
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 169 || status == 170) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 171) {//�˳���J
			var Equipment = new Array();
			switch (selection) {
				case 0://RingList
				case 3:
					Equipment[0] = new Array(1112407, 1112407, 1112407, 1112407, 1112407, 1112407, 1112408, 1112408, 1112408, 1112408, 1112408, 1112408, 
									 1112535, 1112535, 1112535, 1112535, 1112535, 1112536, 1112536, 1112536, 1112536, 1112536, 
									 1112538, 1112538, 1112538, 1112538, 1112539, 1112539, 1112539, 1112539, 
									 1112540, 1112540, 1112540, 1112541, 1112541, 1112541, 1112542, 1112542, 1112542, 1112543, 1112543, 1112543, 1112544, 1112544, 1112544, 
									 1112545, 1112545, 1112546, 1112546, 1112547, 1112547, 1112548, 1112548, 1112549, 1112549, 
									 1112550, 1112551, 1112552, 1112553, 1112554, 1112555, 1112556, 1112557, 1112558, 1112559, 1112560, 1112561, 1112562, 1112563, 1112564, 1112565, 1112566, 1112567, 1112587);
					break;
				case 1://CapeList
				case 4:
					Equipment[1] = new Array(1102000, 1102000, 1102000, 1102001, 1102001, 1102001, 1102002, 1102002, 1102002, 1102003, 1102003, 1102003, 1102004, 1102004, 1102004, 1102040, 1102040, 1102040, 1102041, 1102041, 1102041, 1102042, 1102042, 1102042, 1102043, 1102043, 1102043, 
										 1102011, 1102011, 1102012, 1102012, 1102013, 1102013, 1102014, 1102014, 1102015, 1102015, 1102016, 1102016, 1102017, 1102017, 1102018, 1102018, 
										 1102021, 1102022, 1102023, 1102024, 1102084, 1102085, 1102086, 1102087, 1102026, 1102027, 1102028, 1102029, 1102030, 1102139, 1102140, 1102031, 1102032, 1102033, 1102034, 1102035, 1102046, 1102047, 1102048, 1102057, 1102231, 1102256, 1102172);
					break;
				case 2://EarringList
				case 5:
					Equipment[2] = new Array(1032006, 1032007, 1032010, 1032012, 1032013, 1032014, 1032015, 1032016, 1032017, 1032018, 1032019, 1032020, 1032021, 1032022, 1032023, 1032030, 1032031);
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
			switch (selection) {
				case 0:
				case 1:
				case 2:
					var selStr = "�U�˳ƾ��v�p�U�G\r\n\r\n";
					for (var i=0,n=0;i<Equipment[selection].length;i++) {
						if (i > 0 && Equipment[selection][i] == Equipment[selection][i-1]) {
							n++;
							continue;
						} else if (i == 0 && Equipment[selection][i] == Equipment[selection][i+1]) {
							continue;
						}
						n++;
						selStr += "#i" + Equipment[selection][i] + ":# #t" + Equipment[selection][i] + ":#  #b" + (1*n/Equipment[selection].length*100).toFixed(2) +"%#k\r\n\r\n";
						n = 0;
					}
					cm.sendOk(selStr);
					cm.dispose();
					break;
				case 3:
				case 4:
				case 5:
					if (cm.haveItem(5220000)) {
						var item;
						item = cm.gainGachaponItem(Equipment[selection-3][Math.floor(Math.random() * Equipment[selection-3].length)], 1);
						
						if (item != -1) {
							cm.gainItem(5220000, -1);
							cm.sendOk("�z��o�F #r#i" + item + ":#  #t" + item + ":##k �˳ƣ���C");
							cm.worldMessage(0," ���a �u" + cm.getName() + "�v �ϥ���J�����F �u" + cm.getItemName(item) + "�v �A�j�a���ߥL��~�@^_^");
						} else {
							cm.sendOk("�нT�{�z���W�Ҧ����O�_�U�� 1 ��H�W���Ŷ��C");
						}
					} else {
						cm.sendOk("�z���W�S����J���A��J��i��ӫ��ʶR�A\r\n��� #rETC/Game#k ���A�ï��z�C����� ^_^");
					}
					cm.dispose();
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 189 || status == 190) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 191) {
			var Reborntimes = cm.getReborns() + 1;
			var RemainAP = Reborntimes * 50;
			var JobNumber = new Array(0, 1000, 2100, 2001, 2002, 2003, 3200, 3300, 3500, 3001);
			
			if (Reborntimes == 1) {
				cm.worldMessage(2," ���a �u" + cm.getName() + "�v �w������ 1 ����͡A�j�a���ߥL��~�@^_^");
			} else {
				cm.worldMessage(0," ���a �u" + cm.getName() + "�v �w�g��� �u" + Reborntimes + "�v ���P�A�j�a���ߥL��~�@^_^");
			}
			cm.changeJob(selection);
			cm.getPlayer().resetStats(4, 4, 4, 4);
			cm.getPlayer().resetAPSP();
			cm.getChar().setLevel(9);
			cm.gainExp(1242);
			cm.getChar().setRemainingAp(RemainAP);
			cm.setReborns();
			cm.dispose();
		} else if (status == 209 || status == 210) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 211) {
			switch (selection) {
				case 0:
					var MapleNumber = new Array("1", "1", "1", "6");
					var ItemName = new Array("2000004", "2000005", "2050004", "5220000");
					var ItemNumber = new Array("150", "70", "250", "1");
					var selStr = "�п�ܱ��I�������~�G\r\n\r\n";
					for (var i=0;i<MapleNumber.length;i++) {
						selStr += "#L" + i + "##i4001618:#�@�G�@#i" + ItemName[i] + ":#�@���@#r" + MapleNumber[i] + "#k�@�G�@#r" + ItemNumber[i] + "#k\r\n\r\n";
					}
					cm.sendSimple(selStr);
					break;
				case 1:
					var MapleNumber = new Array("1", "5");
					var ItemName = new Array("5220000", "4000038");
					var ItemNumber = new Array("2", "1");
					var selStr = "�п�ܱ��I�������~�G\r\n\r\n";
					for (var i=0;i<MapleNumber.length;i++) {
						selStr += "#L" + i + "##i4032056:#�@�G�@#i" + ItemName[i] + ":#�@���@#r" + MapleNumber[i] + "#k�@�G�@#r" + ItemNumber[i] + "#k\r\n\r\n";
					}
					cm.sendSimple(selStr);
					break;
				case 2:
					cm.sendSimple("�п�ܱ��I�������~�G\r\n\r\n" + 
								  "#L0#�ݷs�W#l");
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else if (status == 899 || status == 900) {
			status = -1;
			cm.sendYesNo("�аݱz�٦���L�A�ȻݨD�ܡH");
		} else if (status == 901) {
			switch (selection) {
				case 0:
					var NormalAP = (cm.getPlayerStat("LVL") - 1) * 5 + cm.getReborns() * 50;
					var PlayerRAP = cm.getPlayerStat("RAP");
					cm.getPlayer().resetStats(4, 4, 4, 4);
					cm.getChar().setRemainingAp(-PlayerRAP);
					cm.getChar().setRemainingAp(NormalAP);
					cm.dispose();
					break;
				case 1:
					cm.dispose();
					break;
				default :
					cm.sendOk("���������~�A�гq���޲z���A���¡C");
					cm.dispose();
					break;
			}
		} else {
			cm.dispose();
		}
	}
}
@echo off
title 113���A���M�� �ӷ~��(Maplemiss)
set CLASSPATH=.;dist\*
Runtime\bin\java -Xmx512M -server -Dnet.sf.odinms.wzpath=wz  server.Start
pause

@echo off
title 113伺服器專用 商業版(Maplemiss)
set CLASSPATH=.;dist\*
Runtime\bin\java -Xmx512M -server -Dnet.sf.odinms.wzpath=wz  server.Start
pause

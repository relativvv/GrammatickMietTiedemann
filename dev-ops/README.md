# Was passiert bei dem Vorbereitungs-Schritt für Windows-Nutzer?
Zum ersten wird eine `WSL2` Umgebung eingerichtet. WSL2 steht für `Windows-Linux-Subsystem` und erschafft parallel auf einem Windows-Rechner eine Linux-Umgebung die im Hintergrund aktiv ist, diese wird für `Docker` benötigt
Dann wird der Installationsassistent von Docker geöffnet, damit die Container (Was das ist siehst du unten) auch starten können. Der letzte Installer spiel ein Update für die Powershell ein, das wird auch von Docker benötigt um besser
mit WSL2 interagieren zu können.

# Was ist ein Container?
Ein Container ist ein bisschen mit einer VM zu vergleichen. Bei einer VM gibt es die Hardwareebene und einen Hypervisor der alle VMs verwaltet. Auf einer VM selbst ist dann wiederrum ein Betriebssystem, die Applikationen usw.
Bei einem Container hingegen entfällt die Hardware- und die Hypervisorebene. Es baut auf dem Kernel des Host-OS auf. Ein Container ist auch nicht dazu gedacht wie eine VM zu funktionieren, sondern nur um z.B. 1 Applikation laufen zu lassen.
Im normalfall hat man also viele Container mit jeweils einer Anwendung. 

# Wie funktioniert das Setup?
Jede Anwendung (Frontend & Backend) hat eine eigene "`Dockerfile`". In einer `Dockerfile` wird quasi ein Bauplan angefertigt, wie die Applikation zusammengebaut wird.
Am Anfang wird dazu die Basis festgelegt, beim Frontend z.B. node und für das Backend ein Webserver für nginx. Die `RUN` Befehle installieren dann bestimmte Abhängigkeiten wie die `node_modules`,
composer oder `PHP`, damit diese im Container verfügbar sind.

Das Start-Skript führt den Befehl "`docker-compose up -d`" aus. Docker-Compose dient zur Container-Orchestrierung, es verwaltet also mehrere Container gleichzeitig über eine Datei: Die "`docker-compose.yml`".
In dieser sind alle nötigen "`Services`" angelegt. Ein Service bedeutet ein Container. `MySQL` ist also ein Container, genauso wie `phpMyAdmin`, das `Frontend` und das `Backend`. Außerdem wird hier definiert welche Daten in die Container "geladen" werden
damit dieser damit arbeiten kann. Zusätzlich ist dort beschrieben auf welchen Ports diese Applikationen erreichbar sein sollen.

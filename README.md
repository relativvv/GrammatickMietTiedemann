# GrammatickMietTiedemann
&nbsp;
&nbsp;

## Wie starte ich das Setup?
- **Windows**:
  - Starte die Datei "```Action.bat```" als Administrator und wähle zuerst Schritt 0 aus.
  - Lasse das Konsolenfenster solange offen, bis Du deinen Computer neu gestartet hast
  - Nach ein paar Minuten Wartezeit, wegen des Downloads der Docker Installation, wird sich der Installationsassistent automatisch öffnen.
    - Klicke Dich hier einfach durch und deaktiviere KEINEN Haken
  - Zusätzlich sollte sich ein weiterer Installationsassistent öffnen
    - Klicke Dich hier auch einfach wieder durch
  - Nachdem beide Programme installiert wurden --> starte Deinen Computer neu
  - Dann kannst Du die Docker-Desktop App von Deinem Desktop aus starten
  - Gehe dann oben auf das Zahnrad für die Einstellungen und aktiviere im Reiter General noch "`Docker Compose v2`" --> klicke dann auf apply & restart um Docker-Desktop neu zu starten
  - Jetzt öffnest Du die Datei "```Action.bat```" und wählst aus, was Du tun willst
    - Hinweis: Der erste Start der Applikationen dauer ein wenig länger
  - Du kannst jede Aktion, die derzeit in dem Konsolenfenster ausgeführt wird mit ```STRG+C``` abbrechen und dann eine andere wählen
  
  
- **Unix (MacOS/Linux)**
  - Installiere Docker + Docker-Compose
    - https://docs.docker.com/get-docker/
    - https://docs.docker.com/compose/install/
  - Öffne ein Konsolenfenster und navigiere in den Ordner des Repositories
  - Führe ```./Action.sh``` aus
  - Tippe 1 und Enter → Die Installation erfolgt völlig automatisch
  - Andere Aktionen die durch das Skript gestartet wurden, wie Logs, können jederzeit mit ```STRG+C``` abgebrochen werden
    - Danach kannst Du eine andere Aktion wählen

## Unerwartete Ereignisse während der Installation, die vielleicht auftreten können
1. Sollte sich während der Installation ein weiteres Konsolenfenster öffnen und dich nach einem Nutzernamen, sowie einem Passwort fragen 
   - Du kannst dort willkürliche Daten eingeben z.B.
     ```
     Name: user
     Password: 12345
     ```
   - Danach kannst Du das neue Konsolenfenster schließen

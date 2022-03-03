#!/bin/bash
decision() {
  echo "Hey, wähle bitte aus, was Du machen möchtest.."
  echo "[1] - Setup starten"
  echo "[2] - Setup beenden"
  echo "[3] - SSH ins Backend"
  echo "[4] - Error-Logs des Backends einsehen"
  echo "[5] - Access-Logs des Backend Webservers"
  echo "[6] - Frontend-Logs einsehen"
  echo "[7] - Datenbankverwaltung öffnen"

  read INPUT

  case $INPUT in
    1)
      echo " --> Setup wird gestartet..."
      cd dev-ops || exit
      docker-compose up -d
      docker exec -ti app_core service php8.0-fpm start
      echo " "
      echo "------------------"
      echo "Das Backend erreichst du unter http://localhost:42069."
      echo "Das Frontend erreichst du unter http://localhost:3000, Hier musst Du aber ein paar Sekunden warten bis es erreichbar ist."
      echo "------------------"
      echo " "
      ;;

    2)
      echo " --> Setup wird heruntergefahren..."
      cd dev-ops || exit
      docker-compose down
      decision
      ;;

    3)
      echo " --> SSH Session wird geladen..."
      docker exec -ti -w /usr/share/nginx/html/proj app_core /bin/bash
      decision
      ;;

    4)
      echo " --> Error-Logs werden geladen..."
      docker exec -ti app_core tail -f /var/log/nginx/project_error.log
      decision
      ;;

    5)
      echo " --> Access-Logs werden geladen..."
      docker exec -ti app_core tail -f /var/log/nginx/project_access.log
      decision
    ;;

    6)
      echo " --> Frontend-Logs werden geladen..."
      docker logs -f app_frontend
      decision
    ;;

    7)
      echo " --> opening phpMyAdmin"
      open http://localhost:9898/
      decision
    ;;
  esac
}


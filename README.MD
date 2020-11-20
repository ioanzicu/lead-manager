pipenv shell
python leadmanager/manage.py makemigrations leads
python leadmanager/manage.py migrate
curl -d '{"name":"John","email":"john@gmail.com", "message":"Hi there"}' -H 'Content-Type: application/json' http://localhost:8000/api/leads/

yarn run dev

git add .
git commit -am 'push to heroku'
heroku git:remote -a dinh-user-form
git push heroku master
heroku open
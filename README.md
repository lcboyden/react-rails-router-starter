## instructions

### clone/git

1.  `git clone git@github.com:lcboyden/react-rails-router-starter.git <ProjectName>`
- remove origin
- cd into project
2.  `git remote rm origin`
3.  create a new repo and add new origin
4.  `git remote add origin <ulr>`
5. `git push origin master`

### Rails

1. `cd <ProjectName>`
2. run `bundle`
3. in config/database yml replace database name to something else
   - in this case that would be react-rails-router...
4. `rails db:create db:migrate db:seed`
5. `rails s -p 3001`
6. check this route `http://localhost:3001/api/products` should see products

### React

1. `cd <ProjectName>/client`
2. run `yarn`
3. run `yarn start`
4. open `http://localhost:3000` (make sure rails is on port 3001)

FROM node

WORKDIR / ToDoList

COPY . . 

RUN npm install

EXPOSE 5173

CMD ["npm" , "run" , "dev" , "--" , "--host"]
npm run build
docker rmi nickolaus899/portfolio
docker build -t nickolaus899/portfolio .
docker push nickolaus899/portfolio
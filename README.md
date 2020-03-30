
# Описание
Проект для сохранения и получения результатов авто тестов

# Локальный запуск
1. Установка зависимостей :
```sh
$ npm install
```
2. Запуск :
```sh
$ npm start
```
# Запуск в докере
1. Building an image
```sh
$ docker-compose build
```
2. Running a container
 ```sh
$ docker-compose up
```
3. stopping a container
```sh
$ docker-compose down
```
# Rest API
| Method | Endpoint | Описание |
| ------ | ------ | ------ |
| Post |api/results/getresults |Метод получения результатов авто тестов |
| Post | api/results/sendresults | Метод сохранения результатов авто тестов|
### Описание api/results/getresults
| Параметр | Тип | Обязательность | Описание |
| ------ | ------ | ------ | ------ |
| reportid | int | Да | id отчета. Для формирования общего отчета нужно использовать один и тот же id для всех компонентов. Можно использовать linux datatime |
| project | string | Да| Название проекта|
| component | string | Нет| Получить результаты конкретного компанента. В случае, если параметр не передан - метод возвращает результаты по всем компанентам|
| offset | int | Нет| Смещение. В случае, если параметр не передан - смещение равно нулю|
| count | int | Нет| Количество результатов в ответе. В случае, если параметр не передан - метод возвращает все результаты|
Привемер запроса:
url: http://localhost:3000/api/results/getresults
body:
```sh
{
  "reportid": 1585552915,
  "project": "PR",
  "component": "web",
  "offset": 0,
  "count": 2
}
```
response:
```sh
[
    {
        "_id": "5e81a11928eeab01436374de",
        "reportid": 1585552915,
        "project": "PR",
        "component": "web",
        "title": "open site",
        "link": "pr-2321",
        "result": "passed",
        "__v": 0
    },
    {
        "_id": "5e81a11928eeab01436374df",
        "reportid": 1585552915,
        "project": "PR",
        "component": "web",
        "title": "auth in site",
        "link": "pr-2323",
        "result": "failed",
        "__v": 0
    }
]
```
### Описание api/results/sendresults
| Параметр | Тип | Обязательность | Описание |
| ------ | ------ | ------ | ------ |
| reportid | int | Да | id отчета. Для формирования общего отчета нужно использовать один и тот же id для всех компонентов. Можно использовать linux datatime |
| project | string | Да| Название проекта|
| component | string | Да| Компонент, например ios|
| results[].title | string | Да| Назавние теста|
|  results[].link | string | Да| Ссылка в jira |
|  results[].result | string | Да| Результат ("passed" / "failed") |
Привемер запроса:
url: http://localhost:3000/api/results/sendresults
body:
```sh
{
   "reportid": 1585552915,
   "project": "PR",
   "component": "web",
   "results": [
      {
         "title": "open site",
         "link": "pr-2321",
         "result": "passed"
      },
      {
         "title": "auth in site",
         "link": "pr-2323",
         "result": "failed"
      }
   ]
}
```
response:
```sh
{}
```

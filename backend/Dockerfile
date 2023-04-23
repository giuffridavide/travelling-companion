FROM python:3.10-alpine

# watch Python's output in real time when the container is running
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install --upgrade pip pipenv

WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod o+x /entrypoint.sh

ENTRYPOINT ["sh", "-c", "/entrypoint.sh"]

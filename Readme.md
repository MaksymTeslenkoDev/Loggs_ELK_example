## Description
Collecting mysql slow logs and node app logs with use of ELK stack and graylog as an alternative to kibana. TIG stack is used for perfomance monitoring of seperate components like Filebeats, Logstash, Elasticsearch and overall System perfomance. All screenshots with perfomance results attached below. 

Query: 
bash```
siege -c120 -r10 -b 'http://0.0.0.0:3000/query'```


## Kibana logs dashboard example

Collected mysql slow logs example
![kibana logs dashboard example ](./images/kibana_logs_example.png)

## TIG Monitoring 

### Filebeat perfomance 

![filebeat](./images/Beats_1.png "filebeat")

### Logstash pefomance

![logstash](./images/Logstash_1.png)

### Elasticsearch perfomance

![elasticsearch1](./images/Elasticsearch_1.png)

![elasticsearch2](./images/Elasticsearch_2.png)

### System overall perfomance

![system1](./images/System_1.png)

![system2](./images/System_2.png)



# Use the official Logstash image as the base image
FROM docker.elastic.co/logstash/logstash:7.17.23

# Install the gelf output plugin
RUN /usr/share/logstash/bin/logstash-plugin install logstash-output-gelf

# Set entrypoint and default command
ENTRYPOINT ["/usr/local/bin/docker-entrypoint"]
CMD ["-f", "/usr/share/logstash/pipeline/logstash.conf"]

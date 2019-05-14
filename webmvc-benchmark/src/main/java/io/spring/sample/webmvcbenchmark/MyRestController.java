/*
 * Copyright 2002-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.spring.sample.webmvcbenchmark;


import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
public class MyRestController {

	@GetMapping("/text")
	public String text() {
		return "Hello, World!";
	}

	@GetMapping("/text/{delay}")
	public Mono<String> text(@PathVariable("delay") long delay) {
		Mono<String> responseMono = Mono.just("Hello, World!");
		return responseMono.delayElement(Duration.ofMillis(delay));
	}

	@PostMapping("/echo")
	public String echo(@RequestBody String body) {
		return body;
	}

	@PostMapping(path = "/user", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> createUser(@RequestBody User user) {
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}

	@GetMapping(path = "/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public User findUser(@PathVariable String id) {
		return new User(id, "Ben Chmark");
	}

	@GetMapping(path = "/stream/{elements}/{chunk}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<String> stream(@PathVariable("elements") int elements, @PathVariable("chunk") int chunk) {
		String body = getGeneratedString(chunk);
		return Flux.range(0, elements)
				.map(l -> body)
				.onBackpressureBuffer();
	}

	@GetMapping(path = "/stream/{elements}/{chunk}/{delay}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<String> streamDelay(@PathVariable("elements") int elements, @PathVariable("chunk") int chunk,
			@PathVariable("delay") long delay) {
		String body = getGeneratedString(chunk);
		return Flux.range(0, elements)
				.delayElements(Duration.ofMillis(delay))
				.map(l -> body)
				.onBackpressureBuffer();
	}

	@GetMapping("/remote_rest_template")
	public ResponseEntity<String> remote_rest_template() {
		RestTemplate restTemplate = new RestTemplate();
		return restTemplate.getForEntity("http://example.com", String.class);
	}

	@GetMapping("/remote_web_client")
	public Mono<String> remote_web_client() {
		return WebClient.create()
				.get()
				.uri("http://example.com")
				.retrieve()
				.bodyToMono(String.class);
	}

	private static final char PREFIX = 'A';
	private final Map<Integer, String> generatedStrings = new ConcurrentHashMap<>();

	private String getGeneratedString(Integer length) {
		String str = generatedStrings.get(length);
		if (str == null) {
			str = generatedStrings.computeIfAbsent(length, l -> StringUtils.repeat(PREFIX, l));
		}
		return str;
	}
}

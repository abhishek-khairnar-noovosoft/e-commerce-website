package app.e_commerce

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate

@RestController
class DemoController {
    @GetMapping("/home")
    fun hello() : ResponseEntity<String> {
        val restTemplate = RestTemplate()
        val url = "http://localhost:5173"

        val pageContent = restTemplate.getForObject(url, String::class.java)
        return ResponseEntity.ok(pageContent)
    }
}
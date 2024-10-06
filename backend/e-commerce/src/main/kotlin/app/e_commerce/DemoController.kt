package app.e_commerce

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DemoController {
    @GetMapping("/home")
    fun hello() : String {
        return "hello"
    }
}
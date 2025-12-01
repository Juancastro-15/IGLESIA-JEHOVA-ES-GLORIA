package com.jehovaesgloria.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SiteController {

    @GetMapping("/")
    public String inicio() {
        return "inicio";
    }

    @GetMapping("/nosotros")
    public String nosotros() {
        return "nosotros";
    }

    @GetMapping("/ministerios")
    public String ministerios() {
        return "ministerios";
    }

    @GetMapping("/donaciones")
    public String donaciones() {
        return "donaciones";
    }

    @GetMapping("/contactos")
    public String contactos() {
        return "contactos";
    }
}

package com.LBG.legacy.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LBG.legacy.domain.Report;
import com.LBG.legacy.services.ReportService;

@RestController
@RequestMapping("/bugreporting")
@CrossOrigin
public class ReportController {

	private ReportService service;

	public ReportController(ReportService service) {
		super();
		this.service = service;
	}

	@PostMapping("/create")
	public ResponseEntity<Report> createFootballer(@RequestBody Report newReport) {

		return this.service.createReport(newReport);
	}

}

package com.LBG.legacy.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.LBG.legacy.domain.Report;
import com.LBG.legacy.repo.ReportRepo;

@Service
public class ReportService {

	private ReportRepo repo;

	public ReportService(ReportRepo repo) {
		super();
		this.repo = repo;
	}

	public ResponseEntity<Report> createReport(Report newReport) {
		Report created = this.repo.save(newReport);
		return new ResponseEntity<Report>(created, HttpStatus.CREATED);

	}
}

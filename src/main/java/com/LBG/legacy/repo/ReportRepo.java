package com.LBG.legacy.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LBG.legacy.domain.Report;

public interface ReportRepo extends JpaRepository<Report, Integer> {

}

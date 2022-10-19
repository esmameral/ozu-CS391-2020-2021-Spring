package com.sampleproject.sampleproject.model.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sampleproject.sampleproject.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}

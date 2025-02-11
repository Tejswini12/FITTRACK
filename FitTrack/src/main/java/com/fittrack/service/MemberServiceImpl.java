package com.fittrack.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fittrack.dto.MemberDto;
import com.fittrack.pojos.Member;
import com.fittrack.repository.MemberDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class MemberServiceImpl implements MemberService {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private MemberDao memberDao;
	@Override
	public MemberDto addNewMember(MemberDto memberDto) {
		Member member=mapper.map(memberDto, Member.class);
		memberDao.save(member);
		return mapper.map(member, MemberDto.class);
	}

}

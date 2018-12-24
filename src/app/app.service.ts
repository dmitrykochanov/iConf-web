import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpRequest } from './entities/SignUpRequest';

import { BaseResponse } from './entities/BaseResponse';
import { AuthResponse } from './entities/AuthResponse';
import { SignInRequest } from './entities/SignInRequest';
import { Conference } from './entities/Conference';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {
  BASE_URL = 'http://localhost:8080';

  constructor(private client: HttpClient) {
  }

  signIn(signInRequest: SignInRequest) {
    return this.client.post<BaseResponse<AuthResponse>>(this.BASE_URL + '/users/sign-in', signInRequest);
  }

  signUp(signUpRequest: SignUpRequest) {
    return this.client.post<BaseResponse<AuthResponse>>(this.BASE_URL + '/users/sign-up', signUpRequest);
  }

  getConferences() {
    return this.client.get<BaseResponse<Conference[]>>(this.BASE_URL + '/conferences');
  }

  getConference(conferenceId: number) {
    return this.client.get<BaseResponse<Conference>>(this.BASE_URL + '/conferences/' + conferenceId);
  }

  createConference(conference: Conference) {
    return this.client.post<BaseResponse<null>>(this.BASE_URL + '/conferences', conference);
  }

  deleteConference(conferenceId: number) {
    return this.client.delete<BaseResponse<null>>(this.BASE_URL + '/conferences/' + conferenceId);
  }

  addParticipantToConference(conferenceId: number, participantId: number) {
    return this.client.post<BaseResponse<null>>(this.BASE_URL + '/conferences/' + conferenceId + '/participants/' + participantId, null);
  }

  removeParticipantFromConference(conferenceId: number, participantId: number) {
    return this.client.delete<BaseResponse<null>>(this.BASE_URL + '/conferences/' + conferenceId + '/participants/' + participantId);
  }

  participateInConference(conferenceId: number, participate: boolean) {
    if (participate) {
      return this.client.post<BaseResponse<null>>(this.BASE_URL + '/conferences/' + conferenceId + '/participate', null);
    } else {
      return this.client.delete<BaseResponse<null>>(this.BASE_URL + '/conferences/' + conferenceId + '/participate');
    }
  }
}

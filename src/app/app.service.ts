import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Conference} from './entities/Conference';

import {SignUpRequest} from './entities/SignUpRequest';

import {BaseResponse} from './entities/BaseResponse';
import {AuthResponse} from './entities/AuthResponse';
import {SignInRequest} from './entities/SignInRequest';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {
  BASE_URL = 'http://localhost:8080';

  constructor(private client: HttpClient) {
  }

  getConferences() {
    return this.client.get<BaseResponse<Conference[]>>(this.BASE_URL + '/conferences');
  }

  getConferencesById(conferenceId: number) {
    return this.client.get<BaseResponse<Conference>>(this.BASE_URL + '/conference/' + conferenceId);
  }

  addParticipantToConference(conferenceId: string, userId: string) {
    return this.client.post<BaseResponse<AuthResponse>>(this.BASE_URL + '/conferences/' + conferenceId + '/participants', {
      id: userId,
      email: 'test'
    });
  }

  signIn(signInRequest: SignInRequest) {
    return this.client.post<BaseResponse<AuthResponse>>(this.BASE_URL + '/users/sign-in', signInRequest);
  }

  signUp(signUpRequest: SignUpRequest) {
    return this.client.post<BaseResponse<AuthResponse>>(this.BASE_URL + '/users/sign-up', signUpRequest);
  }
}

import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { NewAccount } from '../interfaces/new-account';
import { AuthTokens } from '../interfaces/auth-tokens';
import { BaseAuthService } from '@llstarscreamll/authentication/utils';

@Injectable()
export class AuthService extends BaseAuthService {

  private signUpEndpoint = this.env.api + 'api/v1/auth/sign-up';
  private loginEndpoint = this.env.api + 'api/v1/auth/login';
  private logoutEndpoint = this.env.api + 'api/v1/auth/logout';
  private authUserEndpoint = this.env.api + 'api/v1/auth/user';

  public constructor(
    @Inject('environment')
    private env,
    private http: HttpClient
  ) { super(); }

  public signUp(newAccount: NewAccount): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(this.signUpEndpoint, newAccount, { headers: this.defaultHeaders });
  }

  public loginWithCredentials(credentials): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(this.loginEndpoint, credentials, { headers: this.defaultHeaders });
  }

  public logout(authTokens: AuthTokens): Observable<any> {
    return this.http.delete(this.logoutEndpoint, { headers: this.authHeaders(authTokens) });
  }

  public getAuthUser(tokens: AuthTokens): Observable<any> {
    return this.http.get<any>(this.authUserEndpoint, { headers: this.authHeaders(tokens) })
      .pipe(map(res => res.data));
  }
}

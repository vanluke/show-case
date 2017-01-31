import { createToken } from 'shared/test-utils/localStorage';
import {
  getTokenExpirationDate,
  isTokenExpired
} from 'auth/service/auth.utils';
import { expect } from 'chai';

const isDate = date => !isNaN(new Date(date).valueOf());

describe('Auth', () => {
  describe('services', () => {
    describe('utils', () => {
      const token = createToken();
      it('getTokenExpirationDate return date', () => {
        const date = getTokenExpirationDate(token);
        // eslint-disable-next-line no-unused-expressions
        expect(isDate(date)).to.be.true;
      });
      it('isTokenExpired should check expiration date', () => {
        const expired = isTokenExpired(token);
        // eslint-disable-next-line no-unused-expressions
        expect(expired).to.be.false;
      });
    });
  });
});

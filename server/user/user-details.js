import { getUserInfo } from './service';

export async function get() {
  const accessToken = this.params.accessToken;
  this.body = await getUserInfo(accessToken);
  this.status = 201;
}

import userDetails from './user-details.json';

const getDetails = () => Promise.resolve(userDetails);

export async function get() {
  this.status = 201;
  this.body = await getDetails();
}

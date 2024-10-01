import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((a) => ({
        status: a.status,
        value: a.status === 'fulfilled' ? a.value : String(a.reason),
      }))
    ));
}
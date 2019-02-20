import awsExports from '../aws-exports';
export function initialize(appInstance) {
  let service = appInstance.lookup('service:amplify');
  service.configure(awsExports || {});
}

export default {
  initialize
};

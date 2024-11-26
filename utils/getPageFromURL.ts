export default function() {
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get('page') ? parseInt(queryParams.get('page') as string) : 1;
}

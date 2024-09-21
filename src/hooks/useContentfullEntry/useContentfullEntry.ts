import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { client } from '../../server';
import { Entry } from 'contentful';

const useContentfulEntry = (entryId: string): UseQueryResult<Entry<any>, Error> => {
  const response = useQuery<Entry<any>, Error>(
    {
      queryKey: [entryId],
      queryFn: () => client.getEntry(entryId),
    }
  );

  return response;
};

export { useContentfulEntry };
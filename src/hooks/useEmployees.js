import { useQuery } from 'react-query';

export const useEmployees = () => {
  return useQuery(['employees'], async () => {
    const response = await fetch('http://localhost:5050/api/employees');
    if (!response.ok) throw new Error('Failed to fetch employees');
    return response.json();
  });
};

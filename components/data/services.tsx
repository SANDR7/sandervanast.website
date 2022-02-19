import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const ServiceData = () => {
  const { data } = useSWR<{ services: []; length: string }>(
    '/api/services',
    fetcher
  );
  const serviceData = data;
  return serviceData;
};

export default ServiceData;

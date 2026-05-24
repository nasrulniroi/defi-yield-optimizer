'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProtocols() {
  const { data, error, isLoading, mutate } = useSWR('/api/protocols', fetcher, {
    refreshInterval: 30000,
  });

  return {
    protocols: data?.data || [],
    isLoading,
    isError: error,
    refresh: mutate,
  };
}

export function useYields() {
  const { data, error, isLoading, mutate } = useSWR('/api/yields', fetcher, {
    refreshInterval: 15000,
  });

  return {
    yields: data?.data || [],
    isLoading,
    isError: error,
    refresh: mutate,
  };
}

export function usePortfolio() {
  const { data, error, isLoading, mutate } = useSWR('/api/portfolio', fetcher, {
    refreshInterval: 30000,
  });

  return {
    portfolio: data?.data || null,
    isLoading,
    isError: error,
    refresh: mutate,
  };
}

export function useAlerts() {
  const { data, error, isLoading, mutate } = useSWR('/api/alerts', fetcher, {
    refreshInterval: 60000,
  });

  return {
    alerts: data?.data || [],
    isLoading,
    isError: error,
    refresh: mutate,
  };
}

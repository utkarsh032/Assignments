import React, { useEffect, useState } from 'react'

import { DashboardBanner } from '../UI/DashboardBanner/DashboardBanner'
import { FilterBar } from './FilterBar/FilterBar'
import { CandidateCards } from './CandidateCards/CandidateCards'
import { fetchCandidates } from '../api/candidatesAPI'

export const Dashboard = () => {
  const [candidates, setCandidates] = useState([])
  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCandidates()
        setCandidates(data)
        setFilteredCandidates(data)
      } catch (error) {
        console.error('Error fetching candidates:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filtered = [...candidates]
    if (statusFilter !== 'All') {
      filtered = filtered.filter(candidate => candidate.status === statusFilter)
    }

    if (searchQuery) {
      filtered = filtered.filter(candidate =>
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredCandidates(filtered)
  }, [searchQuery, statusFilter, candidates])

  return (
    <div>
      <DashboardBanner />
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <CandidateCards candidates={filteredCandidates} />
    </div>
  )
}

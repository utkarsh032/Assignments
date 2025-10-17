import React from 'react'
import { Card } from '../../UI/Card/Card'

export const CandidateCards = ({ candidates }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {candidates.map(candidate => (
        <Card
          key={candidate._id}
          name={candidate.name}
          email={candidate.email}
          status={candidate.status}
          jobTitle={candidate.jobTitle}
          resumeUrl={candidate.resumeUrl}
        />
      ))}
    </div>
  )
}

import moment from 'moment';

type TimeIssueProps = {
  createdAt: string;
  updatedAt: string;
}

const TimeIssue = ({ createdAt, updatedAt }: TimeIssueProps) => {
  return (
    <div className='mt-[11px] pt-[13px] leading-[22px] font-semibold border-t border-t-[#dfe1e6] text-[#5e6c84] text-[13px]'>
      <div>Created at {moment(createdAt).fromNow()}</div>
      <div>Updated at {moment(updatedAt).fromNow()}</div>
    </div>
  )
}

export default TimeIssue
import { UserSummary } from './user_summary.model'

export type UsersResponse = {
	total_record_count: number
	user: UserSummary[]
}
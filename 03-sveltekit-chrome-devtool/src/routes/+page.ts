import type { PageLoad } from './$types'
import type { Balance } from '../types'

export const load: PageLoad = async ({ fetch }) => {
    // Get the balance from API
	const balance = await fetch('/api/balance?startMonth=2024-9&endMonth=2024-11',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
	const balanceJson = await balance.json();

    const averageBalance = Math.floor(balanceJson.reduce((sum: number, entry: Balance) => sum + entry.balance.amount, 0) / 3);

    // Get the interest from API
    const interest = await fetch(`/api/interest?principal=${averageBalance}&monthlyAmount=0&startMonth=2024-09&endMonth=2024-11`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
	
    const interestJson = await interest.json();

	return { interest: interestJson.interestList };
}
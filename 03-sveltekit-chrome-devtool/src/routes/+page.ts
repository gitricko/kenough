import type { PageLoad } from "./$types"
import type { Balance } from "../types"

const BALANCE_API_URL = "/api/balance"
const INTEREST_API_URL = "/api/interest"
const MONTHLY_AMOUNT = "0"
const START_MONTH = "2024-09"
const END_MONTH = "2024-11"

export const load: PageLoad = async ({ fetch }) => {
    // Get the balance from API
    const balance = await fetch(`${BALANCE_API_URL}?startMonth=${START_MONTH}&endMonth=${END_MONTH}`);

    // Convert balance API response to JSON
    const balanceJson = await balance.json();

    // Get the average balance
    const averageBalance = Math.floor(balanceJson.reduce((sum: number, entry: Balance) => sum + entry.balance.amount, 0) / balanceJson.length);

    // Get the interest from API
    const interest = await fetch(`${INTEREST_API_URL}?principal=${averageBalance}&monthlyAmount=${MONTHLY_AMOUNT}&startMonth=${START_MONTH}&endMonth=${END_MONTH}`);

    // Convert balance API response to JSON
    const interestJson = await interest.json();

    return { interest: interestJson.interestList };
}
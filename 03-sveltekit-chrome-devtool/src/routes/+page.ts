/** @type {import('./$types').PageLoad} */


export async function load({ fetch }) {
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
    console.log(balanceJson)

    // Get the interest from API
    const interest = await fetch('/api/interest?principal=0&monthlyAmount=0&startMonth=1&endMonth=1',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
	const interestJson = await interest.json();
    console.log(interestJson)

    balanceJson.push(interestJson.history[0])
	return { balanceJson };
}
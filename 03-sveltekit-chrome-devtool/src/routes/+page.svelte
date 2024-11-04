<script lang="ts">
    import { onMount } from "svelte"
    import { Chart } from "frappe-charts"
    import { page } from '$app/stores'

    let chart;
    let promotionVisible = true;

    // Convert number to US currency format.
    const toUSCurrencyFormat = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    }

    // Handle event for promotion button click
    let handleButtonClick = () => {
        promotionVisible = false;
    }

    // Data for the bar chart
    const data = {
        labels: ["August", "September", "October"],
        datasets: [
            {
                name: "Interest",
                values: [78687, 95398, 83234],
            },
        ],
    }

    // Bar chart options
    const options = {
        title: "Potential Interest per Month",
        type: "bar",
        height: 250,
        data: data,
        tooltipOptions: {
            formatTooltipY: (d: number) => toUSCurrencyFormat(d),
        },
    }

    // total contains sum of interests for all the months in the chart
    let total = toUSCurrencyFormat(
        data.datasets[0].values.reduce((partialSum, a) => partialSum + a, 0),
    )

    // Initialize the chart on mount
    onMount(() => {
        console.log('#####')
        console.log($page.data)
        console.log('#####')
        chart = new Chart("#chart", options);
    })
</script>

<div class="container">
    <img class="image" src="./dashboard.png" alt="Access Dashboard" />
    <div class:invisible={!promotionVisible} class="promotion-container">
        <div class="promotion">
            <div class="main-title">You could be making more money!</div>
            <div class="main-description">
                Based on your account balances for the past 3 months, you could
                be earning <b class="earnings">{total}</b> in interest if you leave
                your account balances in the Money Market Deposit Account.
            </div>
            <div id="chart" style="width: 100%; height: 300px;"></div>
            <div class="buttons-container">
                <button onclick={handleButtonClick} class="ignore-button"
                    >IGNORE</button
                >
                <button
                    onclick={handleButtonClick}
                    class="get-promotion-button">GET PROMOTION</button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .invisible {
        visibility: hidden;
    }
    .get-promotion-button {
        color: white;
        font-size: 10px;
        font-weight: 600;
        margin-right: 10px;
        padding: 5px 8px 5px 8px;
        border: none;
        background-color: rgb(21, 92, 147);
    }
    .get-promotion-button:hover {
        background-color: #338dcd;
    }
    .ignore-button {
        color: white;
        font-size: 10px;
        font-weight: 600;
        padding: 5px 8px 5px 8px;
        border: none;
        background-color: rgb(21, 92, 147);
    }
    .ignore-button:hover {
        background-color: #338dcd;
    }
    .buttons-container {
        display: flex;
        justify-content: end;
        gap: 10px;
        color: blue;
    }
    .earnings {
        color: green;
    }
    .main-description {
        font-size: 20px;
    }
    .main-title {
        font-size: 36px;
    }
    .promotion {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .promotion-container {
        position: absolute;
        top: 126px;
        left: 45px;
        width: 795px;
        height: 567px;
        background-color: white;
    }
    .image {
        width: 1321px;
        height: 830px;
    }
    .container {
        font-family: "Open Sans", sans-serif;
        color: #44484f;
    }
</style>

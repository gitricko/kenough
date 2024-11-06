<script lang="ts">
    import { onMount } from "svelte";
    import { Chart } from "frappe-charts";
    import { page } from "$app/stores";
    import type { Interest } from "../types";

    let chart;
    let promotionVisible = true;

    // Convert number to US currency format.
    const toUSCurrencyFormat = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    };

    // Handle event for promotion button click
    let handleButtonClick = () => {
        promotionVisible = false;
    };

    // Data for the bar chart
    let chartData = {
        labels: [],
        datasets: [
            {
                name: "Interest",
                values: [],
            },
        ],
    };

    // Options for bar chart
    const options = {
        title: "Potential Interest per Month",
        type: "bar",
        height: 250,
        data: chartData,
        tooltipOptions: {
            formatTooltipY: (d: number) => toUSCurrencyFormat(d),
        },
    };

    let averageAccountBalance = "";
    let totalInterestEarned = "";

    // Initialize the chart on mount
    onMount(() => {
        // Set the bar chart labels
        chartData.labels = $page.data.interest.map(
            (entry: Interest) => entry.month,
        );

        // Set the interest values in the chart
        const interests = $page.data.interest.map(
            (entry: Interest) => entry.interest,
        );
        chartData.datasets[0].values = interests;

        // Setup avernage account balance and total interest values
        averageAccountBalance = toUSCurrencyFormat(
            $page.data.interest.map((entry: Interest) => entry.principal)[0],
        );
        totalInterestEarned = toUSCurrencyFormat(
            interests[interests.length - 1],
        );

        // Create new chart
        chart = new Chart("#chart", options);
    });
</script>

<div class="container">
    <img class="image" src="./dashboard.png" alt="Access Dashboard" />
    <!-- ***** PLEASE DO NOT REMOVE THE PROMOTION CONTAINER ***** -->
    <div class:invisible={!promotionVisible} class="promotion-container">
        <!-- ***** PLEASE FEEL FREE TO CHANGE ANYTHING WITHIN THE PROMOTION CONTAINER ***** -->
        <div class="promotion">
            <div class="main-title">You could be making more money!</div>
            <div class="main-description">
                Based on your average account balances of <b class="earnings"
                    >{averageAccountBalance}</b
                >
                for the past 3 months, you could be earning as much as
                <b class="earnings">{totalInterestEarned}</b> in interest if you
                leave all your account balances in the Money Market Deposit Account.
            </div>
            <div id="chart" style="width: 100%; height: 300px;"></div>
            <div class="buttons-container">
                <button onclick={handleButtonClick} class="ignore-button"
                    >IGNORE</button
                >
                <button onclick={handleButtonClick} class="get-promotion-button"
                    >GET PROMOTION</button
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

class ChartRenderer {
    renderBarChart(data) {
        throw new Error("Must be implemented");
    }
    
    renderPieChart(data) {
        throw new Error("Must be implemented");
    }
}

class ThirdPartyChartLibrary {
    createBarGraph(chartData) {
        console.log(`[ThirdParty] Creating bar graph with data:`, chartData);
        return `bar_chart_${Date.now()}`;
    }
    
    createPieGraph(chartData) {
        console.log(`[ThirdParty] Creating pie graph with data:`, chartData);
        return `pie_chart_${Date.now()}`;
    }
}

class ChartRendererAdapter extends ChartRenderer {
    constructor() {
        super();
        this.thirdPartyLibrary = new ThirdPartyChartLibrary();
    }
    
    renderBarChart(data) {
        console.log(`[Adapter] Converting data for bar chart`);
        
        // Convert data format: [{name: 'A', value: 10}] -> {labels: ['A'], values: [10]}
        const adaptedData = {
            labels: data.map(item => item.name),
            values: data.map(item => item.value)
        };

        return this.thirdPartyLibrary.createBarGraph(adaptedData);
    }
    
    renderPieChart(data) {
        console.log(`[Adapter] Converting data for pie chart`);
        
        // Convert data format: [{name: 'A', value: 10}] -> {slices: [{label: 'A', amount: 10}]}
        const adaptedData = {
            slices: data.map(item => ({
                label: item.name,
                amount: item.value
            }))
        };
        
        return this.thirdPartyLibrary.createPieGraph(adaptedData);
    }
}

class MyApp {
    constructor() {
        this.chartRenderer = new ChartRendererAdapter();
    }
    
    showDashboard() {
        const salesData = [
            { name: 'Jan', value: 1000 },
            { name: 'Feb', value: 1500 },
            { name: 'Mar', value: 1200 }
        ];
        
        const categoryData = [
            { name: 'Electronics', value: 40 },
            { name: 'Clothing', value: 35 },
            { name: 'Books', value: 25 }
        ];
        
        this.chartRenderer.renderBarChart(salesData);
        this.chartRenderer.renderPieChart(categoryData);
    }
}

const app = new MyApp();
app.showDashboard();

import { Builder, By, until } from "selenium-webdriver";
import assert from "assert"; 


// get the argument (default to 'local' if not provided) 
const environment = process.argv[2] || "local"; 


// setting up a selenium server 
// not needed if running locally with a local Selenium server 
const seleniumURL = environment === "github" 
    ? 'http://selenium:4444/wd/hub' // Remote Selenium server in Docker/CI 
    : 'http://localhost:4444/wd/hub'; // Local Selenium server 


const serverUrl = environment === "github" 
    ? 'http://server:5173' // Remote server in Docker/CI
    : 'http://localhost:5173'; // Local server

console.log(`Running tests in '${environment}' environment`);
console.log(`Selenium URL: ${seleniumURL}`);
console.log(`Server URL: ${serverUrl}`);


(
async function runTests() {
    console.log("Starting Selenium tests..."); 

    // init webdriver with chrome 

    const driver = environment === "github" 
        ? await new Builder()
            .forBrowser("chrome") 
            .usingServer(seleniumURL)
            .build()
        : await new Builder() 
            .forBrowser("chrome")
            // using local else .usingServer(seleniumURL)  
            .build(); 


    try {
        console.log("Navigating to the server URL..."); 
        await driver.get(serverUrl); 


        // Wait for page to load
        await driver.wait(until.elementLocated(By.id("click-count")), 10000);
        const text = await driver.findElement(By.id("click-count")).getText();
        console.log(`Initial count: ${text}`); 
        
        // test the button Click Me!
        const button = await driver.findElement(By.className("custom-button"));
        await button.click(); 
        console.log("Button clicked successfully!"); 
        
        // Wait for React to update
        await driver.sleep(100);
        
        // get the new count
        const newCount = await driver.findElement(By.id("click-count")).getText(); 
        
        
        // assert that the count has increased by 1 
        assert.strictEqual(parseInt(newCount), parseInt(text) + 1, "Click count did not increase by 1");
        console.log("Test passed: Click count increased by 1"); 
    }
    catch (error) {
        console.error("Error navigating to the server URL:", error);
        
        return;
    } 
    finally { 
        console.log("Waiting for the page to load..."); 
        await driver.quit(); 
    } 
}

)();
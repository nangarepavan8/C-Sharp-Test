
/*
using System.Security.Cryptography.X509Certificates;
using Microsoft.Playwright;
using NUnit.Framework;

namespace Demo1;

public class Tests
{
    [SetUp]
    public void Setup()
    {
        
    }

    [Test]
    public async Task Test1()
    {
      // Playwright
      using var playwright = await Playwright.CreateAsync();


      //Browser
      await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
      {
          Headless = false,
          SlowMo = 50,
      });


      //page
      var page = await browser.NewPageAsync();

      await page.GotoAsync("http://www.eaapp.somee.com/");
        // check login page look like  ...  
      await page.ClickAsync("text=Login");  
      //  await page.ClickAsync("text=Register");
      //  await page.ClickAsync("text=Employee");
      //  await page.ClickAsync("text=About");

          await page.ScreenshotAsync(new PageScreenshotOptions
          {
              Path = "Login.jpg",
             

          });
        //  userName
        await page.FillAsync("#UserName", "admin");
        //  Password
        await page.FillAsync("#Password", "password");

          //  click on Log in button
        await page.ClickAsync("text= Log in");
        
        var isExist = await page.Locator("text='Employee Details'").IsVisibleAsync(); 
        Assert.IsTrue(isExist);
    }
}

*/
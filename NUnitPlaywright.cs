

using System.Security.Cryptography.X509Certificates;
using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace Demo1;

public class NUnitPlaywright : PageTest
{
    [SetUp]
    public async Task Setup()
    {
        await Page.GotoAsync("http://www.eaapp.somee.com/");
    }

    [Test]
    public async Task Test1()
    { 
        // check login page look like  ...  
      await Page.ClickAsync("text=Login");  
     

          await Page.ScreenshotAsync(new PageScreenshotOptions
          {
              Path = "Login.jpg",
          });

        //  userName
        await Page.FillAsync("#UserName", "admin");
        //  Password
        await Page.FillAsync("#Password", "password");

        //  click on Log in button
        await Page.ClickAsync("text= Log in");


        await Expect(Page.Locator("text='Employee Details'")).ToBeVisibleAsync();

    }
}


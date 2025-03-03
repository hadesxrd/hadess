document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("download-btn").addEventListener("click", function() {
        const webhookUrl = "https://discord.com/api/webhooks/1345123962459394058/aD_JrZ0HrJXaSSWHXfO80UwP7VdtsjyvPnlzyFJaTFax4nsdv8MxrFPB6-_P_NUFrjZ3"; 

        const data = {
            username: "FoxyRush Download",
            avatar_url: "https://cdn.discordapp.com/avatars/1345892287632379984/1577f1d5d5d04c3696853ac2a97a042a.png?size=1024",
            content: "A user **Foxyrush** file downloaded! :inbox_tray:"
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => console.log("Webhook gönderildi!"))
          .catch(error => console.error("Hata oluştu:", error));
    });
});

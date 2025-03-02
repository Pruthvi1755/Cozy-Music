const serverURL = "https://your-server-url.com"; // Replace with your actual server URL

async function sendCommand(command) {
    try {
        let response = await fetch(`${serverURL}/${command}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ guildId: "YOUR_GUILD_ID" }), // Replace with your server's ID
        });

        let data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error("Error sending command:", error);
    }
}

document.getElementById("play").addEventListener("click", () => sendCommand("play"));
document.getElementById("pause").addEventListener("click", () => sendCommand("pause"));
document.getElementById("next").addEventListener("click", () => sendCommand("next"));
document.getElementById("prev").addEventListener("click", () => sendCommand("prev"));


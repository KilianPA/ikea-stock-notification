import { configDotenv } from "dotenv";
import Slimbot from "slimbot";
configDotenv();

const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN);
export const sendMessage = async (message) => {
  try {
    await slimbot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Error while sending message", error);
  }
};

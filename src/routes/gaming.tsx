import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import gameSetup from "@/assets/game-setup.jpg";
import gameRacing from "@/assets/game-racing.jpg";
import gameFootball from "@/assets/game-football.jpg";
import gameAdventure from "@/assets/game-adventure.jpg";
import gameShooter from "@/assets/game-shooter.jpg";
import gameStrategy from "@/assets/game-strategy.jpg";

export const Route = createFileRoute("/gaming")({
  head: () => ({
    meta: [
      { title: "Gaming PC Setup & Game Installation | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Steam, Epic Games, EA app and Ubisoft Connect setup, controller configuration, graphics tuning and gaming PC builds configured properly.",
      },
      { property: "og:title", content: "Gaming PC Setup & Game Installation" },
      {
        property: "og:description",
        content: "Launchers, controllers and graphics settings tuned for smooth play.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Gaming"
      title="Gaming setup that just runs"
      intro="Legitimate games and launchers installed, controllers paired and graphics settings tuned to your hardware."
      groups={[
        {
          title: "Game launchers",
          image: gameSetup,
          items: ["Steam", "Epic Games", "EA app", "Ubisoft Connect", "Xbox / Game Pass app"],
        },
        {
          title: "Installation & setup",
          image: gameShooter,
          items: [
            "PC game installation",
            "Account & library setup",
            "Controller configuration",
            "Game troubleshooting",
          ],
        },
        {
          title: "Performance",
          image: gameRacing,
          items: [
            "Graphics settings optimization",
            "GPU driver installation",
            "Thermal & power tuning",
            "Storage cleanup",
          ],
        },
        {
          title: "Gaming PC Setup Package",
          description: "One visit, fully playable machine.",
          image: gameStrategy,
          items: [
            "Windows install",
            "All drivers",
            "Graphics configuration",
            "Legitimate launcher setup",
            "Controller configuration",
          ],
        },
      ]}
      samplesTitle="Game types we set up"
      samplesIntro="A few examples of what we install and tune. Tell us the title you own and we handle the install, updates and settings."
      samples={[
        {
          name: "Racing & driving simulators",
          detail: "Wheel and controller calibration, high-frame-rate graphics presets.",
          image: gameRacing,
        },
        {
          name: "Football & sports titles",
          detail: "Launcher accounts, controller mapping, roster updates.",
          image: gameFootball,
        },
        {
          name: "Open-world adventure & RPG",
          detail: "Large installs, storage planning, texture and shader settings.",
          image: gameAdventure,
        },
        {
          name: "Shooters & online multiplayer",
          detail: "Low-latency settings, network tuning, anti-cheat troubleshooting.",
          image: gameShooter,
        },
        {
          name: "Strategy & simulation",
          detail: "Mod managers, save backups, long-session stability tuning.",
          image: gameStrategy,
        },
        {
          name: "Full gaming PC build setup",
          detail: "Windows, drivers, launchers, controller and display configuration.",
          image: gameSetup,
        },
      ]}
      note="We only work with legitimate games, licences and official platforms. Game images shown are illustrative examples of the genres we support."
    />
  ),
});

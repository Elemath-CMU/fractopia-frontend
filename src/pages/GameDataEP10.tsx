import { pencil, stick, when } from "./builder";
import { type InteractiveGameData } from "./GameData";

export const ep10: InteractiveGameData[] = [
  {
    interaction: 1,
    type: "playground",
    dialogues: [
      {
        text: 'This is test of game engine',
        canClickNext: true
      },
    ],
    objects: [
        // short form of { id: "stick1", type: "stick", length: 70, width: 36, x: 458 - 70, y: 200 }
        stick({ id: "stick1", length: 70, x: 458 - 70, y: 200 }),
        // short form of { id: "pencil1", type: "pencil", length: 70, width: 62, color: "#F9D17B", x: 458 + 30, y: 200 }
        pencil({ id: "pencil1", length: 70, x: 458 + 30, y: 200 }),
    ],
    // short form of { type: "dropOnObject", nextInteraction: 2, answers: [{ objectId: "pencil1", targetObjectId: "stick1" }] }
    rule: when("pencil1").dropOn("stick1").continueToInteraction(2),
  },
]

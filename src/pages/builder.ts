import type { CheckAnswerDropOnObject, PencilData, StickData } from "./GameData";

export class GameRuleBuilderDropOnObject {
  private readonly rule: CheckAnswerDropOnObject = { type: "dropOnObject", nextInteraction: 0, answers: [] };
  private readonly objectId: number | string;
  constructor(objectId: number | string) {
    this.objectId = objectId;
  }
  dropOn(objectId: number | string): GameRuleBuilderDropOnObject {
    this.rule.answers = (this.rule.answers || []).concat({ objectId: this.objectId, targetObjectId: objectId });
    return this;
  }
  continueToInteraction(nextInteraction: number): CheckAnswerDropOnObject {
    if (!this.rule.answers || this.rule.answers.length === 0) {
      throw new Error("No answers defined for dropOnObject rule.");
    }
    if (nextInteraction <= 0) {
      throw new Error("wrong nextInteraction number, or nextInteraction is not defined");
    }
    this.rule.nextInteraction = nextInteraction;
    return this.rule;
  }
}

export function when(objectId: number | string) {
  return new GameRuleBuilderDropOnObject(objectId);
}

export function pencil(id: number | string, length: number, x: number, y: number): PencilData;
export function pencil({ id, length, x, y }: { id: number | string; length: number; x: number; y: number }): PencilData;
export function pencil(idOrObj: number | string | { id: number | string; length: number; x: number; y: number }, length?: number, x?: number, y?: number): PencilData {
  if (typeof idOrObj === "object") {
    const { id, length, x, y } = idOrObj;
    return { id, type: "pencil", length, width: 62, color: "#F9D17B", x, y };
  } else {
    return { id: idOrObj, type: "pencil", length: length!, width: 62, color: "#F9D17B", x: x!, y: y! };
  }
}

export function stick(id: number | string, length: number, x: number, y: number): StickData;
export function stick({ id, length, x, y }: { id: number | string; length: number; x: number; y: number }): StickData;
export function stick(idOrObj: number | string | { id: number | string; length: number; x: number; y: number }, length?: number, x?: number, y?: number): StickData {
  if (typeof idOrObj === "object") {
    const { id, length, x, y } = idOrObj;
    return { id, type: "stick", length, width: 36, x, y };
  } else {
    return { id: idOrObj, type: "stick", length: length!, width: 36, x: x!, y: y! };
  }
}
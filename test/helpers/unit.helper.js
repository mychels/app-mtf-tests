import { $, expect } from "@wdio/globals";
import HomeScreen from "../screens/home.screen.js";
import UnitScreen from "../screens/unit.screen.js";
import units from "../fixtures/units.json";
import tools from "../utils/tools.js";

export async function addUnit() {
  await HomeScreen.unitMenu.waitForDisplayed({ timeout: 5000 });
  await HomeScreen.unitMenu.click();

  const unitName = tools.getRandomItem(units.units);

  await UnitScreen.unitName.waitForDisplayed({ timeout: 5000 });
  await UnitScreen.unitName.setValue(unitName);

  await UnitScreen.saveButton.waitForDisplayed({ timeout: 5000 });
  await UnitScreen.saveButton.click();

  await UnitScreen.unitName.setValue("");

  const unitAdd = $(`android=new UiSelector().text("${unitName}")`);

  expect(await unitAdd.isDisplayed()).toBe(true);

  await driver.back();
}

import { $, expect } from "@wdio/globals";
import HomeScreen from "../screens/home.screen.js";
import FoodScreen from "../screens/food.screen.js";
import foods from "../fixtures/foods.json";
import tools from "../utils/tools.js";

export async function addFood() {
  await HomeScreen.foodMenu.waitForDisplayed({ timeout: 5000 });
  await HomeScreen.foodMenu.click();

  const foodName = tools.getRandomItem(foods.frutas);

  await FoodScreen.foodName.waitForDisplayed({ timeout: 5000 });
  await FoodScreen.foodName.setValue(foodName);

  await FoodScreen.saveButton.waitForDisplayed({ timeout: 5000 });
  await FoodScreen.saveButton.click();

  await FoodScreen.foodName.setValue("");

  const foodAdd = $(`android=new UiSelector().text("${foodName}")`);

  expect(await foodAdd.isDisplayed()).toBe(true);

  await driver.back();
}

export async function addAndDeleteFood() {
  await HomeScreen.foodMenu.waitForDisplayed({ timeout: 5000 });
  await HomeScreen.foodMenu.click();

  const foodName = tools.getRandomItem(foods.proteinas);

  await FoodScreen.foodName.waitForDisplayed({ timeout: 5000 });
  await FoodScreen.foodName.setValue(foodName);

  await FoodScreen.saveButton.waitForDisplayed({ timeout: 5000 });
  await FoodScreen.saveButton.click();

  await FoodScreen.foodName.setValue("");

  let foodAdd = $(`android=new UiSelector().text("${foodName}")`);

  await foodAdd.click();

  await FoodScreen.deleteButton.waitForDisplayed({ timeout: 5000 });
  await FoodScreen.deleteButton.click();

  foodAdd = $(`android=new UiSelector().text("${foodName}")`);

  expect(await foodAdd.isDisplayed()).toBe(false);

  await driver.back();
}

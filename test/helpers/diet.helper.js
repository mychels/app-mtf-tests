import { $, expect } from "@wdio/globals";
import HomeScreen from "../screens/home.screen.js";
import DietListScreen from "../screens/diet_list.screen.js";
import DietScreen from "../screens/diet.screen.js";
import AddFoodDietScreen from "../screens/add_food_diet.screen.js";

export async function addDiet() {
  await HomeScreen.dietMenu.waitForDisplayed({ timeout: 5000 });
  await HomeScreen.dietMenu.click();

  await DietListScreen.newDietButton.waitForDisplayed({ timeout: 5000 });
  await DietListScreen.newDietButton.click();

  const dietName = "Dieta 1";

  await DietScreen.dietName.waitForDisplayed({ timeout: 5000 });
  await DietScreen.dietName.setValue(dietName);

  await DietScreen.cafeDaManha.waitForDisplayed({ timeout: 5000 });
  await DietScreen.cafeDaManha.click();

  await AddFoodDietScreen.food.waitForDisplayed({ timeout: 5000 });
  await AddFoodDietScreen.food.click();

  const opcoes = await $$("//android.widget.ListView/android.widget.TextView");

  if (opcoes.length === 0) {
    throw new Error("Nenhuma opção encontrada no Spinner");
  }

  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);

  await opcoes[indiceAleatorio].click();

  await AddFoodDietScreen.foodQuantity.waitForDisplayed({ timeout: 5000 });
  await AddFoodDietScreen.foodQuantity.setValue("100");

  await AddFoodDietScreen.addFoodButton.click();

  await AddFoodDietScreen.saveButton.click();

  await DietScreen.saveButton.waitForDisplayed({ timeout: 5000 });
  await DietScreen.saveButton.click();

  const dietAdd = $(`android=new UiSelector().text("${dietName}")`);

  expect(await dietAdd.isDisplayed()).toBe(true);

  await driver.back();
}

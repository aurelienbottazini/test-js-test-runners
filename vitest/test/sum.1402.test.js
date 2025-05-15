
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 89 to equal 159', () => {
  expect(sum(70, 89)).toBe(159);
});

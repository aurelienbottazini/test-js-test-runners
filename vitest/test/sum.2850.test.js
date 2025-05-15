
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 58 to equal 75', () => {
  expect(sum(17, 58)).toBe(75);
});

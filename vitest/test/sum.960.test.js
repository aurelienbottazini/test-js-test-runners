
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 48 to equal 132', () => {
  expect(sum(84, 48)).toBe(132);
});

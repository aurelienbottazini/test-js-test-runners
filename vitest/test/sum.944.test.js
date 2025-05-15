
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 83 to equal 118', () => {
  expect(sum(35, 83)).toBe(118);
});

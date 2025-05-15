
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 34 to equal 75', () => {
  expect(sum(41, 34)).toBe(75);
});

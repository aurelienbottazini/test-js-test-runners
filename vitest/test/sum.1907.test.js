
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 55 to equal 110', () => {
  expect(sum(55, 55)).toBe(110);
});

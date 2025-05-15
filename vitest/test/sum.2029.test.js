
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 5 to equal 25', () => {
  expect(sum(20, 5)).toBe(25);
});

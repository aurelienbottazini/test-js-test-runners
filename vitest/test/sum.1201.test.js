
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 80 to equal 105', () => {
  expect(sum(25, 80)).toBe(105);
});

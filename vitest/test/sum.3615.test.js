
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 25 to equal 105', () => {
  expect(sum(80, 25)).toBe(105);
});

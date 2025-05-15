
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 2 to equal 10', () => {
  expect(sum(8, 2)).toBe(10);
});

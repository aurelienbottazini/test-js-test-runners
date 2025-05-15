
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 4 to equal 99', () => {
  expect(sum(95, 4)).toBe(99);
});

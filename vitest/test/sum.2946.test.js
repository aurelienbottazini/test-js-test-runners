
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 98 to equal 150', () => {
  expect(sum(52, 98)).toBe(150);
});

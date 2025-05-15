
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 17 to equal 51', () => {
  expect(sum(34, 17)).toBe(51);
});

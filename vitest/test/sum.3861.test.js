
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 56 to equal 137', () => {
  expect(sum(81, 56)).toBe(137);
});

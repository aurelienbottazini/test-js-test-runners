
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 14 to equal 72', () => {
  expect(sum(58, 14)).toBe(72);
});

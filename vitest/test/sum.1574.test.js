
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 69 to equal 127', () => {
  expect(sum(58, 69)).toBe(127);
});

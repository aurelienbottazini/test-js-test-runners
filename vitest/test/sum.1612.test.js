
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 55 to equal 81', () => {
  expect(sum(26, 55)).toBe(81);
});

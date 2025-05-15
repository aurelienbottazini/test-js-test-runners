
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 5 to equal 94', () => {
  expect(sum(89, 5)).toBe(94);
});

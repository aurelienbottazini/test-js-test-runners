
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 58 to equal 94', () => {
  expect(sum(36, 58)).toBe(94);
});

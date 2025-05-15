
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 62 to equal 94', () => {
  expect(sum(32, 62)).toBe(94);
});

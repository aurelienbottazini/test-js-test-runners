
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 64 to equal 114', () => {
  expect(sum(50, 64)).toBe(114);
});

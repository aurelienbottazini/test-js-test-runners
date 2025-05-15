
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 82 to equal 114', () => {
  expect(sum(32, 82)).toBe(114);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 32 to equal 114', () => {
  expect(sum(82, 32)).toBe(114);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 50 to equal 106', () => {
  expect(sum(56, 50)).toBe(106);
});

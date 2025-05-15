
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 70 to equal 114', () => {
  expect(sum(44, 70)).toBe(114);
});

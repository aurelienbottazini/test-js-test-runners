
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 18 to equal 114', () => {
  expect(sum(96, 18)).toBe(114);
});

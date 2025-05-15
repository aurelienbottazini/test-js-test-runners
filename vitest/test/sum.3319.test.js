
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 12 to equal 68', () => {
  expect(sum(56, 12)).toBe(68);
});

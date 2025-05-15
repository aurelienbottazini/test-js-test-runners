
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 17 to equal 81', () => {
  expect(sum(64, 17)).toBe(81);
});

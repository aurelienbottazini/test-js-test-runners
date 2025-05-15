
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 58 to equal 72', () => {
  expect(sum(14, 58)).toBe(72);
});

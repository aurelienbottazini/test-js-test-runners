
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 75 to equal 81', () => {
  expect(sum(6, 75)).toBe(81);
});

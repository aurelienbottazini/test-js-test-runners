
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 74 to equal 81', () => {
  expect(sum(7, 74)).toBe(81);
});

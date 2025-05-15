
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 76 to equal 81', () => {
  expect(sum(5, 76)).toBe(81);
});

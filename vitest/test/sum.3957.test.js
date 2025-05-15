
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 4 to equal 81', () => {
  expect(sum(77, 4)).toBe(81);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 12 to equal 21', () => {
  expect(sum(9, 12)).toBe(21);
});

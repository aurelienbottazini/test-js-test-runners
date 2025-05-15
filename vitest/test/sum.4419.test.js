
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 52 to equal 61', () => {
  expect(sum(9, 52)).toBe(61);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 59 to equal 61', () => {
  expect(sum(2, 59)).toBe(61);
});

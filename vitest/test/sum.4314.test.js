
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 33 to equal 61', () => {
  expect(sum(28, 33)).toBe(61);
});

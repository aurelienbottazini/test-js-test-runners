
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 13 to equal 61', () => {
  expect(sum(48, 13)).toBe(61);
});

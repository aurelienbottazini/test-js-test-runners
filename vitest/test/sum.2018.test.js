
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 35 to equal 61', () => {
  expect(sum(26, 35)).toBe(61);
});

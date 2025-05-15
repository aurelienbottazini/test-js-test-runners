
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 8 to equal 37', () => {
  expect(sum(29, 8)).toBe(37);
});

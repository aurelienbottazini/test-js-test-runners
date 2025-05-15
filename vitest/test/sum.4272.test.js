
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 26 to equal 37', () => {
  expect(sum(11, 26)).toBe(37);
});

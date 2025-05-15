
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 31 to equal 37', () => {
  expect(sum(6, 31)).toBe(37);
});

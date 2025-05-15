
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 27 to equal 82', () => {
  expect(sum(55, 27)).toBe(82);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 69 to equal 82', () => {
  expect(sum(13, 69)).toBe(82);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 10 to equal 82', () => {
  expect(sum(72, 10)).toBe(82);
});

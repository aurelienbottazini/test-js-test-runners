
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 15 to equal 82', () => {
  expect(sum(67, 15)).toBe(82);
});

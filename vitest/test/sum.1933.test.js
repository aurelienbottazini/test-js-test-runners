
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 29 to equal 82', () => {
  expect(sum(53, 29)).toBe(82);
});

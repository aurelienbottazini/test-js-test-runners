
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 80 to equal 82', () => {
  expect(sum(2, 80)).toBe(82);
});

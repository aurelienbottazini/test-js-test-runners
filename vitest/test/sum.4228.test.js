
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 35 to equal 82', () => {
  expect(sum(47, 35)).toBe(82);
});

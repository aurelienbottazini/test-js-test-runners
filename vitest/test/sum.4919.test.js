
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 71 to equal 82', () => {
  expect(sum(11, 71)).toBe(82);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 44 to equal 93', () => {
  expect(sum(49, 44)).toBe(93);
});

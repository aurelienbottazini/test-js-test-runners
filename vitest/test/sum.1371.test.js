
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 79 to equal 168', () => {
  expect(sum(89, 79)).toBe(168);
});

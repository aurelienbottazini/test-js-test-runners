
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 64 to equal 75', () => {
  expect(sum(11, 64)).toBe(75);
});

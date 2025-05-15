
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 6 to equal 62', () => {
  expect(sum(56, 6)).toBe(62);
});

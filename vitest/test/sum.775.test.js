
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 50 to equal 78', () => {
  expect(sum(28, 50)).toBe(78);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 48 to equal 108', () => {
  expect(sum(60, 48)).toBe(108);
});

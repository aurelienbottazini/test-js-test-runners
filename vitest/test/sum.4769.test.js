
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 13 to equal 108', () => {
  expect(sum(95, 13)).toBe(108);
});

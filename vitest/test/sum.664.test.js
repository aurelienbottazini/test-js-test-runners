
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 18 to equal 95', () => {
  expect(sum(77, 18)).toBe(95);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 83 to equal 160', () => {
  expect(sum(77, 83)).toBe(160);
});

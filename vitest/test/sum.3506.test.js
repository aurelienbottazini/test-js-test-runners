
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 41 to equal 49', () => {
  expect(sum(8, 41)).toBe(49);
});

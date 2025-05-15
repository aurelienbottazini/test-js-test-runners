
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 41 to equal 85', () => {
  expect(sum(44, 41)).toBe(85);
});

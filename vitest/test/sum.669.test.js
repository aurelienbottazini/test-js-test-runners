
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 41 to equal 95', () => {
  expect(sum(54, 41)).toBe(95);
});

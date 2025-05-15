
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 73 to equal 150', () => {
  expect(sum(77, 73)).toBe(150);
});

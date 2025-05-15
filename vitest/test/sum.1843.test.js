
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 10 to equal 87', () => {
  expect(sum(77, 10)).toBe(87);
});

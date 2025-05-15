
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 77 to equal 91', () => {
  expect(sum(14, 77)).toBe(91);
});

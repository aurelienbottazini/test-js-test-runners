
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 56 to equal 133', () => {
  expect(sum(77, 56)).toBe(133);
});

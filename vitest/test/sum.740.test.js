
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 42 to equal 133', () => {
  expect(sum(91, 42)).toBe(133);
});

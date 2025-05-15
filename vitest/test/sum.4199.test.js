
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 69 to equal 133', () => {
  expect(sum(64, 69)).toBe(133);
});

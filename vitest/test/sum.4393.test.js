
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 92 to equal 133', () => {
  expect(sum(41, 92)).toBe(133);
});

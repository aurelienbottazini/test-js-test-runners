
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 75 to equal 133', () => {
  expect(sum(58, 75)).toBe(133);
});

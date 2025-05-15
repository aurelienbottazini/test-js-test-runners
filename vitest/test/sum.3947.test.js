
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 48 to equal 133', () => {
  expect(sum(85, 48)).toBe(133);
});

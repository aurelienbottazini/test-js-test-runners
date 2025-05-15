
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 83 to equal 133', () => {
  expect(sum(50, 83)).toBe(133);
});

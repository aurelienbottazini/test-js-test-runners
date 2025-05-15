
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 53 to equal 133', () => {
  expect(sum(80, 53)).toBe(133);
});

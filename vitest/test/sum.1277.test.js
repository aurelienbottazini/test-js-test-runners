
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 67 to equal 133', () => {
  expect(sum(66, 67)).toBe(133);
});

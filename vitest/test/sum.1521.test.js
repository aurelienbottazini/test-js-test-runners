
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 37 to equal 133', () => {
  expect(sum(96, 37)).toBe(133);
});

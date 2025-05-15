
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 58 to equal 133', () => {
  expect(sum(75, 58)).toBe(133);
});

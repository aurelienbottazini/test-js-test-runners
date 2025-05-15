
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 84 to equal 133', () => {
  expect(sum(49, 84)).toBe(133);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 34 to equal 133', () => {
  expect(sum(99, 34)).toBe(133);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 74 to equal 133', () => {
  expect(sum(59, 74)).toBe(133);
});

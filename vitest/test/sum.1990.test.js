
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 79 to equal 133', () => {
  expect(sum(54, 79)).toBe(133);
});

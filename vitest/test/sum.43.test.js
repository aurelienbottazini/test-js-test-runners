
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 82 to equal 133', () => {
  expect(sum(51, 82)).toBe(133);
});

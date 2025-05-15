
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 61 to equal 133', () => {
  expect(sum(72, 61)).toBe(133);
});

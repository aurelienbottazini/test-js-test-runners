
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 69 to equal 72', () => {
  expect(sum(3, 69)).toBe(72);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 49 to equal 72', () => {
  expect(sum(23, 49)).toBe(72);
});

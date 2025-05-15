
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 1 to equal 50', () => {
  expect(sum(49, 1)).toBe(50);
});

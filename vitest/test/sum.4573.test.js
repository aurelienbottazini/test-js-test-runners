
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 49 to equal 50', () => {
  expect(sum(1, 49)).toBe(50);
});

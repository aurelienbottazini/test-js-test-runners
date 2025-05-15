
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 0 to equal 3', () => {
  expect(sum(3, 0)).toBe(3);
});

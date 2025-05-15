
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 0 to equal 2', () => {
  expect(sum(2, 0)).toBe(2);
});

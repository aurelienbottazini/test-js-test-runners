
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 0 to equal 10', () => {
  expect(sum(10, 0)).toBe(10);
});

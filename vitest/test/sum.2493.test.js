
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 69 to equal 74', () => {
  expect(sum(5, 69)).toBe(74);
});

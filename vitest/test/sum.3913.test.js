
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 40 to equal 74', () => {
  expect(sum(34, 40)).toBe(74);
});

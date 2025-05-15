
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 61 to equal 95', () => {
  expect(sum(34, 61)).toBe(95);
});

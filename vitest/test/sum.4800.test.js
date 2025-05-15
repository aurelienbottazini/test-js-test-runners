
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 61 to equal 94', () => {
  expect(sum(33, 61)).toBe(94);
});

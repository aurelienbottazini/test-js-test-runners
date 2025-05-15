
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 61 to equal 86', () => {
  expect(sum(25, 61)).toBe(86);
});

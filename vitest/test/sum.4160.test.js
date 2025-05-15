
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 61 to equal 119', () => {
  expect(sum(58, 61)).toBe(119);
});

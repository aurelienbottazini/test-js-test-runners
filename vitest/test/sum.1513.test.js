
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 61 to equal 80', () => {
  expect(sum(19, 61)).toBe(80);
});

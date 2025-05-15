
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 61 to equal 91', () => {
  expect(sum(30, 61)).toBe(91);
});

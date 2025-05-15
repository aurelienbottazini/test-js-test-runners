
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 61 to equal 72', () => {
  expect(sum(11, 61)).toBe(72);
});

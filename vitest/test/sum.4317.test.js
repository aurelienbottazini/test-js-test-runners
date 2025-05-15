
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 61 to equal 77', () => {
  expect(sum(16, 61)).toBe(77);
});

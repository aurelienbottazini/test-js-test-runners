
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 61 to equal 144', () => {
  expect(sum(83, 61)).toBe(144);
});

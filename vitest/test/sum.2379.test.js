
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 76 to equal 77', () => {
  expect(sum(1, 76)).toBe(77);
});

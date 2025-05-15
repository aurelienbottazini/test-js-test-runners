
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 1 to equal 77', () => {
  expect(sum(76, 1)).toBe(77);
});

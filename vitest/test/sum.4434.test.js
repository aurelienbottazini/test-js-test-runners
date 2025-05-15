
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 9 to equal 77', () => {
  expect(sum(68, 9)).toBe(77);
});

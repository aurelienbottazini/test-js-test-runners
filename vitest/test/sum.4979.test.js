
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 81 to equal 114', () => {
  expect(sum(33, 81)).toBe(114);
});

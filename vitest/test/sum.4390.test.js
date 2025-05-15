
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 59 to equal 83', () => {
  expect(sum(24, 59)).toBe(83);
});

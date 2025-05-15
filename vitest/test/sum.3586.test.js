
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 28 to equal 83', () => {
  expect(sum(55, 28)).toBe(83);
});

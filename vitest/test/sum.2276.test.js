
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 28 to equal 127', () => {
  expect(sum(99, 28)).toBe(127);
});

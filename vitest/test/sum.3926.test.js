
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 71 to equal 127', () => {
  expect(sum(56, 71)).toBe(127);
});

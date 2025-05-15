
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 86 to equal 127', () => {
  expect(sum(41, 86)).toBe(127);
});

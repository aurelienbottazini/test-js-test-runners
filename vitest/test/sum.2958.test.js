
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 41 to equal 127', () => {
  expect(sum(86, 41)).toBe(127);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 10 to equal 104', () => {
  expect(sum(94, 10)).toBe(104);
});

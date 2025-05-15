
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 86 to equal 86', () => {
  expect(sum(0, 86)).toBe(86);
});

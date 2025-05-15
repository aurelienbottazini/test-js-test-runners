
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 86 to equal 120', () => {
  expect(sum(34, 86)).toBe(120);
});

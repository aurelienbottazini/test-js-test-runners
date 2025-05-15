
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 86 to equal 87', () => {
  expect(sum(1, 86)).toBe(87);
});

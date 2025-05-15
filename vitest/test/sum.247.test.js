
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 86 to equal 160', () => {
  expect(sum(74, 86)).toBe(160);
});

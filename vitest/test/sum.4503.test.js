
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 98 to equal 192', () => {
  expect(sum(94, 98)).toBe(192);
});

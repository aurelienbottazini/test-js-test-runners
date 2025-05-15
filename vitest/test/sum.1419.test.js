
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 40 to equal 117', () => {
  expect(sum(77, 40)).toBe(117);
});

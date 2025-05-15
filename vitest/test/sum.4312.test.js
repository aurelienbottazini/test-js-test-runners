
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 86 to equal 117', () => {
  expect(sum(31, 86)).toBe(117);
});

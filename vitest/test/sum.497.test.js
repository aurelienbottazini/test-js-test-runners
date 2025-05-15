
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 98 to equal 117', () => {
  expect(sum(19, 98)).toBe(117);
});

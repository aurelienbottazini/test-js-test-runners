
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 63 to equal 117', () => {
  expect(sum(54, 63)).toBe(117);
});

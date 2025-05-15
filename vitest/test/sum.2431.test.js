
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 35 to equal 117', () => {
  expect(sum(82, 35)).toBe(117);
});

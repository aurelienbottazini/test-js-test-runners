
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 64 to equal 117', () => {
  expect(sum(53, 64)).toBe(117);
});

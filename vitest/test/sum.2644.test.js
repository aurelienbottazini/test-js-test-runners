
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 75 to equal 117', () => {
  expect(sum(42, 75)).toBe(117);
});

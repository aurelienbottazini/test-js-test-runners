
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 42 to equal 117', () => {
  expect(sum(75, 42)).toBe(117);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 85 to equal 163', () => {
  expect(sum(78, 85)).toBe(163);
});

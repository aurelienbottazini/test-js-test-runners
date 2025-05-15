
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 85 to equal 138', () => {
  expect(sum(53, 85)).toBe(138);
});

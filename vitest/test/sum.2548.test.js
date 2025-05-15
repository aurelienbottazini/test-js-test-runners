
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 38 to equal 52', () => {
  expect(sum(14, 38)).toBe(52);
});

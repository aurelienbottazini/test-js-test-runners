
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 18 to equal 26', () => {
  expect(sum(8, 18)).toBe(26);
});

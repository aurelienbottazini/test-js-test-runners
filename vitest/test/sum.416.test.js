
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 2 to equal 26', () => {
  expect(sum(24, 2)).toBe(26);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 18 to equal 44', () => {
  expect(sum(26, 18)).toBe(44);
});

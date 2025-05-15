
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 43 to equal 44', () => {
  expect(sum(1, 43)).toBe(44);
});

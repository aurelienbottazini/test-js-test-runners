
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 26 to equal 32', () => {
  expect(sum(6, 26)).toBe(32);
});

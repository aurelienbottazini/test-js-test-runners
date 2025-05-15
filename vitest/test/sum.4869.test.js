
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 42 to equal 62', () => {
  expect(sum(20, 42)).toBe(62);
});

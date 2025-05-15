
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 9 to equal 100', () => {
  expect(sum(91, 9)).toBe(100);
});

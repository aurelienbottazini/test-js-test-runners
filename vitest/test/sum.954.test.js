
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 26 to equal 100', () => {
  expect(sum(74, 26)).toBe(100);
});

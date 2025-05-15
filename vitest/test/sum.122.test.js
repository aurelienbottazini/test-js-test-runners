
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 14 to equal 100', () => {
  expect(sum(86, 14)).toBe(100);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 9 to equal 95', () => {
  expect(sum(86, 9)).toBe(95);
});

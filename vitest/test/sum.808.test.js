
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 8 to equal 94', () => {
  expect(sum(86, 8)).toBe(94);
});

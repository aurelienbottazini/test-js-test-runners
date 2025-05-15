
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 92 to equal 178', () => {
  expect(sum(86, 92)).toBe(178);
});

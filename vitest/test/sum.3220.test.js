
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 50 to equal 136', () => {
  expect(sum(86, 50)).toBe(136);
});

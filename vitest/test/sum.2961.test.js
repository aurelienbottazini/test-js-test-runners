
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 77 to equal 136', () => {
  expect(sum(59, 77)).toBe(136);
});

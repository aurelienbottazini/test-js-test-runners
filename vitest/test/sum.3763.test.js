
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 55 to equal 136', () => {
  expect(sum(81, 55)).toBe(136);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 85 to equal 136', () => {
  expect(sum(51, 85)).toBe(136);
});

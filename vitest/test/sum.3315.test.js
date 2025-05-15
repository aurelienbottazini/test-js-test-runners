
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 61 to equal 136', () => {
  expect(sum(75, 61)).toBe(136);
});

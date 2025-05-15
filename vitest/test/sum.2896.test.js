
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 64 to equal 136', () => {
  expect(sum(72, 64)).toBe(136);
});

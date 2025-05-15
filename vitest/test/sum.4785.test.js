
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 93 to equal 136', () => {
  expect(sum(43, 93)).toBe(136);
});

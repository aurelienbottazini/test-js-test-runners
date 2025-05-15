
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 60 to equal 136', () => {
  expect(sum(76, 60)).toBe(136);
});

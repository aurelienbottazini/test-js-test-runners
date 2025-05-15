
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 83 to equal 136', () => {
  expect(sum(53, 83)).toBe(136);
});

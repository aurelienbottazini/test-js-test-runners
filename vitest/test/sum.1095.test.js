
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 90 to equal 168', () => {
  expect(sum(78, 90)).toBe(168);
});

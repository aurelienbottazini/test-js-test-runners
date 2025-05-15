
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 70 to equal 168', () => {
  expect(sum(98, 70)).toBe(168);
});

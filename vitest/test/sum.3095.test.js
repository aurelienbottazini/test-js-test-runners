
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 87 to equal 168', () => {
  expect(sum(81, 87)).toBe(168);
});

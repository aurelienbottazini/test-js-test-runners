
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 78 to equal 168', () => {
  expect(sum(90, 78)).toBe(168);
});

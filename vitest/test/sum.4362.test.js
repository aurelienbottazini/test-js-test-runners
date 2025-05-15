
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 92 to equal 170', () => {
  expect(sum(78, 92)).toBe(170);
});

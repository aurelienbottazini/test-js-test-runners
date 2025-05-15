
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 28 to equal 40', () => {
  expect(sum(12, 28)).toBe(40);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 63 to equal 104', () => {
  expect(sum(41, 63)).toBe(104);
});

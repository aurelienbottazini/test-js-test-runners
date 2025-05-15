
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 28 to equal 104', () => {
  expect(sum(76, 28)).toBe(104);
});

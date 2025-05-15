
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 23 to equal 104', () => {
  expect(sum(81, 23)).toBe(104);
});

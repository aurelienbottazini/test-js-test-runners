
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 90 to equal 104', () => {
  expect(sum(14, 90)).toBe(104);
});

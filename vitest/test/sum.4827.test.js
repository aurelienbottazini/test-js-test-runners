
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 88 to equal 104', () => {
  expect(sum(16, 88)).toBe(104);
});

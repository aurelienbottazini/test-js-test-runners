
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 56 to equal 104', () => {
  expect(sum(48, 56)).toBe(104);
});

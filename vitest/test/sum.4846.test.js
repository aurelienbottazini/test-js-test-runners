
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 68 to equal 104', () => {
  expect(sum(36, 68)).toBe(104);
});

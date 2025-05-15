
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 68 to equal 127', () => {
  expect(sum(59, 68)).toBe(127);
});

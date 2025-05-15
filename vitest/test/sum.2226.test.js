
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 68 to equal 92', () => {
  expect(sum(24, 68)).toBe(92);
});

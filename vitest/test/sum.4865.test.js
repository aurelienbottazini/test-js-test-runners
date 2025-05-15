
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 20 to equal 114', () => {
  expect(sum(94, 20)).toBe(114);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 33 to equal 127', () => {
  expect(sum(94, 33)).toBe(127);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 94 to equal 152', () => {
  expect(sum(58, 94)).toBe(152);
});

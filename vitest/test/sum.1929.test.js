
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 35 to equal 127', () => {
  expect(sum(92, 35)).toBe(127);
});

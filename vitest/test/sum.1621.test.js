
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 55 to equal 127', () => {
  expect(sum(72, 55)).toBe(127);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 29 to equal 51', () => {
  expect(sum(22, 29)).toBe(51);
});

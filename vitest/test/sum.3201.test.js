
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 22 to equal 52', () => {
  expect(sum(30, 22)).toBe(52);
});

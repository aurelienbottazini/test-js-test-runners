
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 16 to equal 94', () => {
  expect(sum(78, 16)).toBe(94);
});

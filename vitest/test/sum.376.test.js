
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 14 to equal 94', () => {
  expect(sum(80, 14)).toBe(94);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 59 to equal 94', () => {
  expect(sum(35, 59)).toBe(94);
});

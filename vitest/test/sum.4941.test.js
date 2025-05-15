
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 43 to equal 94', () => {
  expect(sum(51, 43)).toBe(94);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 10 to equal 94', () => {
  expect(sum(84, 10)).toBe(94);
});

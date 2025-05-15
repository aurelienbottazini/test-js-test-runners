
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 22 to equal 94', () => {
  expect(sum(72, 22)).toBe(94);
});

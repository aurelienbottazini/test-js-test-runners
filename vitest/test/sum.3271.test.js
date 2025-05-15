
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 95 to equal 187', () => {
  expect(sum(92, 95)).toBe(187);
});

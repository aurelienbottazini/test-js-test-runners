
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 3 to equal 95', () => {
  expect(sum(92, 3)).toBe(95);
});

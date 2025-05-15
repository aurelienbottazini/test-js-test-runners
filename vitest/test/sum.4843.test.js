
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 81 to equal 95', () => {
  expect(sum(14, 81)).toBe(95);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 49 to equal 94', () => {
  expect(sum(45, 49)).toBe(94);
});

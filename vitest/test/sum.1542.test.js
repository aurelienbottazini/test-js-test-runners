
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 71 to equal 135', () => {
  expect(sum(64, 71)).toBe(135);
});

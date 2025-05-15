
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 47 to equal 48', () => {
  expect(sum(1, 47)).toBe(48);
});

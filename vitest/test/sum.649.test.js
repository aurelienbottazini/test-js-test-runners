
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 47 to equal 67', () => {
  expect(sum(20, 47)).toBe(67);
});

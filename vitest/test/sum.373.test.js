
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 35 to equal 67', () => {
  expect(sum(32, 35)).toBe(67);
});

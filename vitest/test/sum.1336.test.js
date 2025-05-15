
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 51 to equal 67', () => {
  expect(sum(16, 51)).toBe(67);
});

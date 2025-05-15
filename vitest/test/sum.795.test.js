
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 31 to equal 67', () => {
  expect(sum(36, 31)).toBe(67);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 50 to equal 67', () => {
  expect(sum(17, 50)).toBe(67);
});

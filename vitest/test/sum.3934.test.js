
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 50 to equal 122', () => {
  expect(sum(72, 50)).toBe(122);
});

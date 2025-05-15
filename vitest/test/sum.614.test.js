
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 72 to equal 122', () => {
  expect(sum(50, 72)).toBe(122);
});

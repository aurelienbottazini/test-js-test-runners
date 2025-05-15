
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 77 to equal 147', () => {
  expect(sum(70, 77)).toBe(147);
});

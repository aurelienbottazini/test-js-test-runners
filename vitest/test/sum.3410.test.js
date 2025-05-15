
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 72 to equal 147', () => {
  expect(sum(75, 72)).toBe(147);
});

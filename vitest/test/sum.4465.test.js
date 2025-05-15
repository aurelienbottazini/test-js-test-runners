
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 98 to equal 170', () => {
  expect(sum(72, 98)).toBe(170);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 72 to equal 170', () => {
  expect(sum(98, 72)).toBe(170);
});

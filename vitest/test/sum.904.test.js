
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 72 to equal 144', () => {
  expect(sum(72, 72)).toBe(144);
});

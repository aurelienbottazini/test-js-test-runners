
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 72 to equal 120', () => {
  expect(sum(48, 72)).toBe(120);
});

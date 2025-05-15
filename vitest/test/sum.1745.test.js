
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 45 to equal 143', () => {
  expect(sum(98, 45)).toBe(143);
});

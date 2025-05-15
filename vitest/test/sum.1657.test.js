
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 16 to equal 64', () => {
  expect(sum(48, 16)).toBe(64);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 40 to equal 88', () => {
  expect(sum(48, 40)).toBe(88);
});

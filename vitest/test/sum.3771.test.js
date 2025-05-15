
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 94 to equal 142', () => {
  expect(sum(48, 94)).toBe(142);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 29 to equal 77', () => {
  expect(sum(48, 29)).toBe(77);
});

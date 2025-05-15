
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 86 to equal 162', () => {
  expect(sum(76, 86)).toBe(162);
});

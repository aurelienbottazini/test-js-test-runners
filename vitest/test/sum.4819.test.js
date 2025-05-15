
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 68 to equal 162', () => {
  expect(sum(94, 68)).toBe(162);
});

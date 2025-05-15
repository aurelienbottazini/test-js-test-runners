
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 72 to equal 162', () => {
  expect(sum(90, 72)).toBe(162);
});

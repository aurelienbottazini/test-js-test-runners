
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 84 to equal 162', () => {
  expect(sum(78, 84)).toBe(162);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 90 to equal 162', () => {
  expect(sum(72, 90)).toBe(162);
});

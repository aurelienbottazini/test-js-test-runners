
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 54 to equal 141', () => {
  expect(sum(87, 54)).toBe(141);
});

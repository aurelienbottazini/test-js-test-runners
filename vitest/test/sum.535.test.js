
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 54 to equal 87', () => {
  expect(sum(33, 54)).toBe(87);
});

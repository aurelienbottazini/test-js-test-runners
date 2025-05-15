
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 28 to equal 76', () => {
  expect(sum(48, 28)).toBe(76);
});

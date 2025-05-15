
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 20 to equal 78', () => {
  expect(sum(58, 20)).toBe(78);
});

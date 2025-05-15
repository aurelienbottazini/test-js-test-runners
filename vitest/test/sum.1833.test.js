
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 85 to equal 181', () => {
  expect(sum(96, 85)).toBe(181);
});

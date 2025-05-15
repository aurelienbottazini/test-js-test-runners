
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 39 to equal 87', () => {
  expect(sum(48, 39)).toBe(87);
});

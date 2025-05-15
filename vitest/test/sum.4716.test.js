
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 51 to equal 87', () => {
  expect(sum(36, 51)).toBe(87);
});

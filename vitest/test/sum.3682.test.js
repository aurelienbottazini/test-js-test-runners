
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 73 to equal 87', () => {
  expect(sum(14, 73)).toBe(87);
});

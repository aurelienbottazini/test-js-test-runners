
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 8 to equal 87', () => {
  expect(sum(79, 8)).toBe(87);
});

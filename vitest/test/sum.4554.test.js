
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 36 to equal 87', () => {
  expect(sum(51, 36)).toBe(87);
});

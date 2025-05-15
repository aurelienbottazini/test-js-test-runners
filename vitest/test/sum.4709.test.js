
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 77 to equal 149', () => {
  expect(sum(72, 77)).toBe(149);
});

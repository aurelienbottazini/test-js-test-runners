
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 57 to equal 149', () => {
  expect(sum(92, 57)).toBe(149);
});

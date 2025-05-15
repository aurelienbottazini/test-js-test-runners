
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 84 to equal 149', () => {
  expect(sum(65, 84)).toBe(149);
});

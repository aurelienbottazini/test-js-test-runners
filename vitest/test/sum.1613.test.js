
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 65 to equal 149', () => {
  expect(sum(84, 65)).toBe(149);
});

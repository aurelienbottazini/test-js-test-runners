
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 36 to equal 115', () => {
  expect(sum(79, 36)).toBe(115);
});

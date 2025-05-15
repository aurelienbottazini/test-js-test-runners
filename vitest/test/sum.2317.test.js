
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 36 to equal 120', () => {
  expect(sum(84, 36)).toBe(120);
});

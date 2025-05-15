
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 92 to equal 164', () => {
  expect(sum(72, 92)).toBe(164);
});

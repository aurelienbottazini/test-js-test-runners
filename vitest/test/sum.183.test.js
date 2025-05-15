
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 68 to equal 140', () => {
  expect(sum(72, 68)).toBe(140);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 94 to equal 180', () => {
  expect(sum(86, 94)).toBe(180);
});

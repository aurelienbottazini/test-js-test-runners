
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 32 to equal 120', () => {
  expect(sum(88, 32)).toBe(120);
});

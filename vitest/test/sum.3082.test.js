
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 80 to equal 134', () => {
  expect(sum(54, 80)).toBe(134);
});

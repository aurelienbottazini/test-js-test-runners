
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 80 to equal 160', () => {
  expect(sum(80, 80)).toBe(160);
});

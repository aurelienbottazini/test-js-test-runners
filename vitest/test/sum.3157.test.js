
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 96 to equal 176', () => {
  expect(sum(80, 96)).toBe(176);
});

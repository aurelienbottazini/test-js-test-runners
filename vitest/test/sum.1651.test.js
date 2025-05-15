
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 80 to equal 127', () => {
  expect(sum(47, 80)).toBe(127);
});

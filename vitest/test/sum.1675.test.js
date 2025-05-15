
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 80 to equal 112', () => {
  expect(sum(32, 80)).toBe(112);
});

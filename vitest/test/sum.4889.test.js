
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 47 to equal 112', () => {
  expect(sum(65, 47)).toBe(112);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 34 to equal 60', () => {
  expect(sum(26, 34)).toBe(60);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 80 to equal 90', () => {
  expect(sum(10, 80)).toBe(90);
});

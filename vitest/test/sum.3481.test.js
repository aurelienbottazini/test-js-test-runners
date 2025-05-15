
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 80 to equal 171', () => {
  expect(sum(91, 80)).toBe(171);
});

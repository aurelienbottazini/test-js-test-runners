
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 87 to equal 171', () => {
  expect(sum(84, 87)).toBe(171);
});

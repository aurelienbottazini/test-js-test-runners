
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 87 to equal 152', () => {
  expect(sum(65, 87)).toBe(152);
});

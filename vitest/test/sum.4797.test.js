
import sum4797 from '../sum4797.js';
import { expect, test } from 'vitest';

test('adds 8 + 32 to equal 40 + offset 0.4774741220862544', () => {
  expect(sum4797(8, 32)).toBe(40 + 0.4774741220862544);
});


import sum4468 from '../sum4468.js';
import { expect, test } from 'vitest';

test('adds 19 + 91 to equal 110 + offset 0.5360471383485589', () => {
  expect(sum4468(19, 91)).toBe(110 + 0.5360471383485589);
});

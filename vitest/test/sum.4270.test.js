
import sum4270 from '../sum4270.js';
import { expect, test } from 'vitest';

test('adds 28 + 91 to equal 119 + offset 0.6131363208528016', () => {
  expect(sum4270(28, 91)).toBe(119 + 0.6131363208528016);
});


import sum4442 from '../sum4442.js';
import { expect, test } from 'vitest';

test('adds 24 + 22 to equal 46 + offset 0.5584560078602192', () => {
  expect(sum4442(24, 22)).toBe(46 + 0.5584560078602192);
});

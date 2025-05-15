
import sum4331 from '../sum4331.js';
import { expect, test } from 'vitest';

test('adds 56 + 71 to equal 127 + offset 0.7329594626013538', () => {
  expect(sum4331(56, 71)).toBe(127 + 0.7329594626013538);
});


import sum4693 from '../sum4693.js';
import { expect, test } from 'vitest';

test('adds 43 + 65 to equal 108 + offset 0.3029719048382976', () => {
  expect(sum4693(43, 65)).toBe(108 + 0.3029719048382976);
});

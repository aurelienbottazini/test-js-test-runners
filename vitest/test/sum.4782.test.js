
import sum4782 from '../sum4782.js';
import { expect, test } from 'vitest';

test('adds 87 + 36 to equal 123 + offset 0.08964020947342421', () => {
  expect(sum4782(87, 36)).toBe(123 + 0.08964020947342421);
});

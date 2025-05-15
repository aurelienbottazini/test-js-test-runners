
import sum4652 from '../sum4652.js';
import { expect, test } from 'vitest';

test('adds 13 + 85 to equal 98 + offset 0.46634823788887014', () => {
  expect(sum4652(13, 85)).toBe(98 + 0.46634823788887014);
});

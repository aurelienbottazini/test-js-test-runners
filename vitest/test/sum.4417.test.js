
import sum4417 from '../sum4417.js';
import { expect, test } from 'vitest';

test('adds 82 + 36 to equal 118 + offset 0.7715236320957898', () => {
  expect(sum4417(82, 36)).toBe(118 + 0.7715236320957898);
});

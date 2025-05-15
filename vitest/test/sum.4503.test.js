
import sum4503 from '../sum4503.js';
import { expect, test } from 'vitest';

test('adds 52 + 70 to equal 122 + offset 0.20892095705660807', () => {
  expect(sum4503(52, 70)).toBe(122 + 0.20892095705660807);
});

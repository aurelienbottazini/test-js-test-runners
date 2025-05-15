
import sum3069 from '../sum3069.js';
import { expect, test } from 'vitest';

test('adds 63 + 28 to equal 91 + offset 0.46912188189674286', () => {
  expect(sum3069(63, 28)).toBe(91 + 0.46912188189674286);
});

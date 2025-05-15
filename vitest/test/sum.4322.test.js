
import sum4322 from '../sum4322.js';
import { expect, test } from 'vitest';

test('adds 74 + 32 to equal 106 + offset 0.9456789402233514', () => {
  expect(sum4322(74, 32)).toBe(106 + 0.9456789402233514);
});

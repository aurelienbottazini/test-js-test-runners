
import sum4510 from '../sum4510.js';
import { expect, test } from 'vitest';

test('adds 89 + 9 to equal 98 + offset 0.2822138942954888', () => {
  expect(sum4510(89, 9)).toBe(98 + 0.2822138942954888);
});

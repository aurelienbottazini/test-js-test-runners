
import sum4914 from '../sum4914.js';
import { expect, test } from 'vitest';

test('adds 85 + 23 to equal 108 + offset 0.536683134331412', () => {
  expect(sum4914(85, 23)).toBe(108 + 0.536683134331412);
});

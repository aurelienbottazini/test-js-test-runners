
import sum3072 from '../sum3072.js';
import { expect, test } from 'vitest';

test('adds 40 + 92 to equal 132 + offset 0.3591960453569778', () => {
  expect(sum3072(40, 92)).toBe(132 + 0.3591960453569778);
});

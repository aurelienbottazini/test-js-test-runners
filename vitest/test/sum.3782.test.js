
import sum3782 from '../sum3782.js';
import { expect, test } from 'vitest';

test('adds 67 + 93 to equal 160 + offset 0.4348405802927532', () => {
  expect(sum3782(67, 93)).toBe(160 + 0.4348405802927532);
});

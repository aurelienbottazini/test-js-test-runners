
import sum4581 from '../sum4581.js';
import { expect, test } from 'vitest';

test('adds 52 + 56 to equal 108 + offset 0.18128242719359167', () => {
  expect(sum4581(52, 56)).toBe(108 + 0.18128242719359167);
});

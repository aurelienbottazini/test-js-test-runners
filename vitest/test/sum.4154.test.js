
import sum4154 from '../sum4154.js';
import { expect, test } from 'vitest';

test('adds 56 + 87 to equal 143 + offset 0.7506870849580736', () => {
  expect(sum4154(56, 87)).toBe(143 + 0.7506870849580736);
});


import sum4814 from '../sum4814.js';
import { expect, test } from 'vitest';

test('adds 80 + 54 to equal 134 + offset 0.1338144988747778', () => {
  expect(sum4814(80, 54)).toBe(134 + 0.1338144988747778);
});

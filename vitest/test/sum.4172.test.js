
import sum4172 from '../sum4172.js';
import { expect, test } from 'vitest';

test('adds 37 + 54 to equal 91 + offset 0.949149149886738', () => {
  expect(sum4172(37, 54)).toBe(91 + 0.949149149886738);
});

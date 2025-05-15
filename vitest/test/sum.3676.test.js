
import sum3676 from '../sum3676.js';
import { expect, test } from 'vitest';

test('adds 92 + 71 to equal 163 + offset 0.8547224406465361', () => {
  expect(sum3676(92, 71)).toBe(163 + 0.8547224406465361);
});

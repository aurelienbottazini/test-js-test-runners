
import sum4917 from '../sum4917.js';
import { expect, test } from 'vitest';

test('adds 28 + 67 to equal 95 + offset 0.02338647031037211', () => {
  expect(sum4917(28, 67)).toBe(95 + 0.02338647031037211);
});


import sum424 from '../sum424.js';
import { expect, test } from 'vitest';

test('adds 55 + 65 to equal 120 + offset 0.44143716625386176', () => {
  expect(sum424(55, 65)).toBe(120 + 0.44143716625386176);
});

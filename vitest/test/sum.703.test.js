
import sum703 from '../sum703.js';
import { expect, test } from 'vitest';

test('adds 72 + 89 to equal 161 + offset 0.8862110065317751', () => {
  expect(sum703(72, 89)).toBe(161 + 0.8862110065317751);
});

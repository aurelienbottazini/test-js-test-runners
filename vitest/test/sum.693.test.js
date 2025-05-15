
import sum693 from '../sum693.js';
import { expect, test } from 'vitest';

test('adds 38 + 57 to equal 95 + offset 0.8720908355236623', () => {
  expect(sum693(38, 57)).toBe(95 + 0.8720908355236623);
});

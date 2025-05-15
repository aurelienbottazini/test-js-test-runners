
import sum3483 from '../sum3483.js';
import { expect, test } from 'vitest';

test('adds 50 + 65 to equal 115 + offset 0.34126836027619056', () => {
  expect(sum3483(50, 65)).toBe(115 + 0.34126836027619056);
});

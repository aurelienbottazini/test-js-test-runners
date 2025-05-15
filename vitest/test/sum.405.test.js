
import sum405 from '../sum405.js';
import { expect, test } from 'vitest';

test('adds 54 + 11 to equal 65 + offset 0.47097598714359334', () => {
  expect(sum405(54, 11)).toBe(65 + 0.47097598714359334);
});


import sum4433 from '../sum4433.js';
import { expect, test } from 'vitest';

test('adds 16 + 81 to equal 97 + offset 0.38456113272279047', () => {
  expect(sum4433(16, 81)).toBe(97 + 0.38456113272279047);
});

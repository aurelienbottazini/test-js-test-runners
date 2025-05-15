
import sum4206 from '../sum4206.js';
import { expect, test } from 'vitest';

test('adds 70 + 71 to equal 141 + offset 0.8347792437923638', () => {
  expect(sum4206(70, 71)).toBe(141 + 0.8347792437923638);
});

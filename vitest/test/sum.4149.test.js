
import sum4149 from '../sum4149.js';
import { expect, test } from 'vitest';

test('adds 57 + 70 to equal 127 + offset 0.48706535734054457', () => {
  expect(sum4149(57, 70)).toBe(127 + 0.48706535734054457);
});

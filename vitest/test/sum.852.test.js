
import sum852 from '../sum852.js';
import { expect, test } from 'vitest';

test('adds 3 + 57 to equal 60 + offset 0.11588186032374781', () => {
  expect(sum852(3, 57)).toBe(60 + 0.11588186032374781);
});

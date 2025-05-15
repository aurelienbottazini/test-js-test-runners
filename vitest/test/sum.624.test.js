
import sum624 from '../sum624.js';
import { expect, test } from 'vitest';

test('adds 85 + 9 to equal 94 + offset 0.013829208871811272', () => {
  expect(sum624(85, 9)).toBe(94 + 0.013829208871811272);
});

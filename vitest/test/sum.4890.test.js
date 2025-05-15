
import sum4890 from '../sum4890.js';
import { expect, test } from 'vitest';

test('adds 82 + 32 to equal 114 + offset 0.4683244187456155', () => {
  expect(sum4890(82, 32)).toBe(114 + 0.4683244187456155);
});

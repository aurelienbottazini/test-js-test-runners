
import sum47 from '../sum47.js';
import { expect, test } from 'vitest';

test('adds 56 + 11 to equal 67 + offset 0.21865483780812478', () => {
  expect(sum47(56, 11)).toBe(67 + 0.21865483780812478);
});

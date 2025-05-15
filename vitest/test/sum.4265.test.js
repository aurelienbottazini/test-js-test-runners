
import sum4265 from '../sum4265.js';
import { expect, test } from 'vitest';

test('adds 28 + 78 to equal 106 + offset 0.6588386475720985', () => {
  expect(sum4265(28, 78)).toBe(106 + 0.6588386475720985);
});


import sum4535 from '../sum4535.js';
import { expect, test } from 'vitest';

test('adds 10 + 6 to equal 16 + offset 0.7927504484794478', () => {
  expect(sum4535(10, 6)).toBe(16 + 0.7927504484794478);
});

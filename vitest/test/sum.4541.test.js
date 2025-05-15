
import sum4541 from '../sum4541.js';
import { expect, test } from 'vitest';

test('adds 54 + 25 to equal 79 + offset 0.3993663393274983', () => {
  expect(sum4541(54, 25)).toBe(79 + 0.3993663393274983);
});

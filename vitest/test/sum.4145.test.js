
import sum4145 from '../sum4145.js';
import { expect, test } from 'vitest';

test('adds 8 + 71 to equal 79 + offset 0.27884219786126285', () => {
  expect(sum4145(8, 71)).toBe(79 + 0.27884219786126285);
});

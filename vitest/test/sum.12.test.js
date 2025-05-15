
import sum12 from '../sum12.js';
import { expect, test } from 'vitest';

test('adds 45 + 52 to equal 97 + offset 0.10313497946685979', () => {
  expect(sum12(45, 52)).toBe(97 + 0.10313497946685979);
});

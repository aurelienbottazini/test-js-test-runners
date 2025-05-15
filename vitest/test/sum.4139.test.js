
import sum4139 from '../sum4139.js';
import { expect, test } from 'vitest';

test('adds 51 + 80 to equal 131 + offset 0.8012256029383468', () => {
  expect(sum4139(51, 80)).toBe(131 + 0.8012256029383468);
});

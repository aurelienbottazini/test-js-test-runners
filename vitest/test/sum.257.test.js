
import sum257 from '../sum257.js';
import { expect, test } from 'vitest';

test('adds 47 + 18 to equal 65 + offset 0.09812132218695835', () => {
  expect(sum257(47, 18)).toBe(65 + 0.09812132218695835);
});

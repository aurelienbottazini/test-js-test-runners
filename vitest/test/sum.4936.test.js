
import sum4936 from '../sum4936.js';
import { expect, test } from 'vitest';

test('adds 1 + 66 to equal 67 + offset 0.2542222643144514', () => {
  expect(sum4936(1, 66)).toBe(67 + 0.2542222643144514);
});

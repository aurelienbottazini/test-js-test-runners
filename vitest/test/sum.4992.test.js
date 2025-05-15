
import sum4992 from '../sum4992.js';
import { expect, test } from 'vitest';

test('adds 67 + 40 to equal 107 + offset 0.5090790122718772', () => {
  expect(sum4992(67, 40)).toBe(107 + 0.5090790122718772);
});

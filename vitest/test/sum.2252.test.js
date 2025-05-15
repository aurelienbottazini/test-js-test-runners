
import sum2252 from '../sum2252.js';
import { expect, test } from 'vitest';

test('adds 69 + 57 to equal 126 + offset 0.9680847924135214', () => {
  expect(sum2252(69, 57)).toBe(126 + 0.9680847924135214);
});

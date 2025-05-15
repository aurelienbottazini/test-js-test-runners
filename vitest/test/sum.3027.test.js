
import sum3027 from '../sum3027.js';
import { expect, test } from 'vitest';

test('adds 86 + 56 to equal 142 + offset 0.9763944988593651', () => {
  expect(sum3027(86, 56)).toBe(142 + 0.9763944988593651);
});

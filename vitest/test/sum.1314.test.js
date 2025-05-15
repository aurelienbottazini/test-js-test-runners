
import sum1314 from '../sum1314.js';
import { expect, test } from 'vitest';

test('adds 86 + 11 to equal 97 + offset 0.6213775491879513', () => {
  expect(sum1314(86, 11)).toBe(97 + 0.6213775491879513);
});


import sum2417 from '../sum2417.js';
import { expect, test } from 'vitest';

test('adds 53 + 66 to equal 119 + offset 0.06291177278849425', () => {
  expect(sum2417(53, 66)).toBe(119 + 0.06291177278849425);
});

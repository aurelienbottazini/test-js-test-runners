
import sum1835 from '../sum1835.js';
import { expect, test } from 'vitest';

test('adds 75 + 89 to equal 164 + offset 0.31749218097180953', () => {
  expect(sum1835(75, 89)).toBe(164 + 0.31749218097180953);
});

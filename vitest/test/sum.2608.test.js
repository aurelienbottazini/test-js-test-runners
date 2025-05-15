
import sum2608 from '../sum2608.js';
import { expect, test } from 'vitest';

test('adds 72 + 30 to equal 102 + offset 0.7306336525569145', () => {
  expect(sum2608(72, 30)).toBe(102 + 0.7306336525569145);
});

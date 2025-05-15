
import sum2085 from '../sum2085.js';
import { expect, test } from 'vitest';

test('adds 95 + 30 to equal 125 + offset 0.24174958774936528', () => {
  expect(sum2085(95, 30)).toBe(125 + 0.24174958774936528);
});

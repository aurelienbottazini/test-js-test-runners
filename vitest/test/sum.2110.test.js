
import sum2110 from '../sum2110.js';
import { expect, test } from 'vitest';

test('adds 88 + 89 to equal 177 + offset 0.45164685937638926', () => {
  expect(sum2110(88, 89)).toBe(177 + 0.45164685937638926);
});

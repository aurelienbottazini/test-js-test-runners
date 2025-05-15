
import sum4344 from '../sum4344.js';
import { expect, test } from 'vitest';

test('adds 91 + 92 to equal 183 + offset 0.968906878671801', () => {
  expect(sum4344(91, 92)).toBe(183 + 0.968906878671801);
});

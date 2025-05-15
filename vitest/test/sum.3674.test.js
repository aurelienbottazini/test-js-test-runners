
import sum3674 from '../sum3674.js';
import { expect, test } from 'vitest';

test('adds 80 + 56 to equal 136 + offset 0.9153946243087393', () => {
  expect(sum3674(80, 56)).toBe(136 + 0.9153946243087393);
});

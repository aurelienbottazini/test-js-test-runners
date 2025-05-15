
import sum550 from '../sum550.js';
import { expect, test } from 'vitest';

test('adds 84 + 49 to equal 133 + offset 0.13731676774955626', () => {
  expect(sum550(84, 49)).toBe(133 + 0.13731676774955626);
});

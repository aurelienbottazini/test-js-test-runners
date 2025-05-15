
import sum740 from '../sum740.js';
import { expect, test } from 'vitest';

test('adds 46 + 7 to equal 53 + offset 0.5785772757523213', () => {
  expect(sum740(46, 7)).toBe(53 + 0.5785772757523213);
});

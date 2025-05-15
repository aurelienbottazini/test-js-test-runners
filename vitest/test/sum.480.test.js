
import sum480 from '../sum480.js';
import { expect, test } from 'vitest';

test('adds 91 + 83 to equal 174 + offset 0.5531804206176714', () => {
  expect(sum480(91, 83)).toBe(174 + 0.5531804206176714);
});

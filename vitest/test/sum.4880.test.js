
import sum4880 from '../sum4880.js';
import { expect, test } from 'vitest';

test('adds 17 + 95 to equal 112 + offset 0.4452665669070409', () => {
  expect(sum4880(17, 95)).toBe(112 + 0.4452665669070409);
});

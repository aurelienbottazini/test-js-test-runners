
import sum4577 from '../sum4577.js';
import { expect, test } from 'vitest';

test('adds 3 + 87 to equal 90 + offset 0.8405585582554914', () => {
  expect(sum4577(3, 87)).toBe(90 + 0.8405585582554914);
});

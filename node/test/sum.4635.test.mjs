
import sum4635 from '../sum4635.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 6 to equal 84 + offset 0.3091939191275014', (t) => {
  assert.strictEqual(sum4635(78, 6), 84 + 0.3091939191275014);
});

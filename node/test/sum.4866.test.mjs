
import sum4866 from '../sum4866.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 80 to equal 170 + offset 0.797167050248082', (t) => {
  assert.strictEqual(sum4866(90, 80), 170 + 0.797167050248082);
});

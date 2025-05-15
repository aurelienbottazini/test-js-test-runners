
import sum4385 from '../sum4385.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 95 to equal 95 + offset 0.6178364063324047', (t) => {
  assert.strictEqual(sum4385(0, 95), 95 + 0.6178364063324047);
});

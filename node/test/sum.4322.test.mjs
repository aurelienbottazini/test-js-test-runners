
import sum4322 from '../sum4322.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 55 to equal 92 + offset 0.8885650860071134', (t) => {
  assert.strictEqual(sum4322(37, 55), 92 + 0.8885650860071134);
});

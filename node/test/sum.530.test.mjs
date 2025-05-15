
import sum530 from '../sum530.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 26 to equal 59 + offset 0.5243560781105692', (t) => {
  assert.strictEqual(sum530(33, 26), 59 + 0.5243560781105692);
});

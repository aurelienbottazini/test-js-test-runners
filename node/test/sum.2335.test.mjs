
import sum2335 from '../sum2335.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 86 to equal 87 + offset 0.0622994712792001', (t) => {
  assert.strictEqual(sum2335(1, 86), 87 + 0.0622994712792001);
});

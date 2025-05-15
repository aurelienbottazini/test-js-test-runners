
import sum4995 from '../sum4995.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 80 to equal 135 + offset 0.0873101161208073', (t) => {
  assert.strictEqual(sum4995(55, 80), 135 + 0.0873101161208073);
});

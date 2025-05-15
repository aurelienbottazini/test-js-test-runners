
import sum927 from '../sum927.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 67 to equal 129 + offset 0.47611289660961653', (t) => {
  assert.strictEqual(sum927(62, 67), 129 + 0.47611289660961653);
});

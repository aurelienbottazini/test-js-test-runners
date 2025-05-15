
import sum2184 from '../sum2184.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 9 to equal 79 + offset 0.0654655337815232', (t) => {
  assert.strictEqual(sum2184(70, 9), 79 + 0.0654655337815232);
});


import sum359 from '../sum359.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 16 to equal 80 + offset 0.049972119654790204', (t) => {
  assert.strictEqual(sum359(64, 16), 80 + 0.049972119654790204);
});

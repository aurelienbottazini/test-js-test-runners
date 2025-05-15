
import sum2440 from '../sum2440.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 14 to equal 50 + offset 0.4915000235060132', (t) => {
  assert.strictEqual(sum2440(36, 14), 50 + 0.4915000235060132);
});

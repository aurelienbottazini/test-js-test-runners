
import sum1749 from '../sum1749.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 22 to equal 112 + offset 0.7330377596024946', (t) => {
  assert.strictEqual(sum1749(90, 22), 112 + 0.7330377596024946);
});

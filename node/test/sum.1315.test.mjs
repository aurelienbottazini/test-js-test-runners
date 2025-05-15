
import sum1315 from '../sum1315.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 77 to equal 93 + offset 0.9865086162558534', (t) => {
  assert.strictEqual(sum1315(16, 77), 93 + 0.9865086162558534);
});

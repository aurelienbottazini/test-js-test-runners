
import sum1309 from '../sum1309.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 6 to equal 70 + offset 0.5020619873209067', (t) => {
  assert.strictEqual(sum1309(64, 6), 70 + 0.5020619873209067);
});

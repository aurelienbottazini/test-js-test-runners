
import sum167 from '../sum167.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 25 to equal 57 + offset 0.30733029417060187', (t) => {
  assert.strictEqual(sum167(32, 25), 57 + 0.30733029417060187);
});

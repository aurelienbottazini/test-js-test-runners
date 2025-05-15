
import sum615 from '../sum615.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 98 to equal 128 + offset 0.27849244454198263', (t) => {
  assert.strictEqual(sum615(30, 98), 128 + 0.27849244454198263);
});

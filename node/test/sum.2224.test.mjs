
import sum2224 from '../sum2224.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 53 to equal 78 + offset 0.5000286428018268', (t) => {
  assert.strictEqual(sum2224(25, 53), 78 + 0.5000286428018268);
});

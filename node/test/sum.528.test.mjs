
import sum528 from '../sum528.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 61 to equal 151 + offset 0.5173661640307834', (t) => {
  assert.strictEqual(sum528(90, 61), 151 + 0.5173661640307834);
});

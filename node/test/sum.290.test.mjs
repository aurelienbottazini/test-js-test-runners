
import sum290 from '../sum290.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 73 to equal 108 + offset 0.8830444835359206', (t) => {
  assert.strictEqual(sum290(35, 73), 108 + 0.8830444835359206);
});

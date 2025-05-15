
import sum270 from '../sum270.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 39 to equal 46 + offset 0.6948872535292434', (t) => {
  assert.strictEqual(sum270(7, 39), 46 + 0.6948872535292434);
});


import sum906 from '../sum906.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 13 to equal 56 + offset 0.6004966248966869', (t) => {
  assert.strictEqual(sum906(43, 13), 56 + 0.6004966248966869);
});

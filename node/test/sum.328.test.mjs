
import sum328 from '../sum328.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 77 to equal 88 + offset 0.9916907732371835', (t) => {
  assert.strictEqual(sum328(11, 77), 88 + 0.9916907732371835);
});

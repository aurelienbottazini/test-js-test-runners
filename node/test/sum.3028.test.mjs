
import sum3028 from '../sum3028.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 34 to equal 42 + offset 0.6652493366548', (t) => {
  assert.strictEqual(sum3028(8, 34), 42 + 0.6652493366548);
});

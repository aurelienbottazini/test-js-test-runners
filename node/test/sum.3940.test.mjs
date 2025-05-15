
import sum3940 from '../sum3940.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 77 to equal 99 + offset 0.978870513552374', (t) => {
  assert.strictEqual(sum3940(22, 77), 99 + 0.978870513552374);
});

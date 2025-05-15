
import sum3982 from '../sum3982.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 20 to equal 50 + offset 0.32075717291242933', (t) => {
  assert.strictEqual(sum3982(30, 20), 50 + 0.32075717291242933);
});

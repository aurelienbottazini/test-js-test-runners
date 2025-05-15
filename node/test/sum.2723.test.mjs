
import sum2723 from '../sum2723.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 9 to equal 39 + offset 0.9713775675009232', (t) => {
  assert.strictEqual(sum2723(30, 9), 39 + 0.9713775675009232);
});


import sum17 from '../sum17.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 17 to equal 39 + offset 0.974377028137291', (t) => {
  assert.strictEqual(sum17(22, 17), 39 + 0.974377028137291);
});

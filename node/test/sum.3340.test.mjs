
import sum3340 from '../sum3340.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 2 to equal 12 + offset 0.8877308358079388', (t) => {
  assert.strictEqual(sum3340(10, 2), 12 + 0.8877308358079388);
});

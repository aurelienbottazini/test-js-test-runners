
import sum2452 from '../sum2452.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 39 to equal 69 + offset 0.7113494412418383', (t) => {
  assert.strictEqual(sum2452(30, 39), 69 + 0.7113494412418383);
});

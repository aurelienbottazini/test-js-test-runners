
import sum2954 from '../sum2954.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 23 to equal 101 + offset 0.5974146634073192', (t) => {
  assert.strictEqual(sum2954(78, 23), 101 + 0.5974146634073192);
});

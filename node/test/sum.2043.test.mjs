
import sum2043 from '../sum2043.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 37 to equal 79 + offset 0.24059296089999915', (t) => {
  assert.strictEqual(sum2043(42, 37), 79 + 0.24059296089999915);
});

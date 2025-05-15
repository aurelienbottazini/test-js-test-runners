
import sum2914 from '../sum2914.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 82 to equal 141 + offset 0.6537508877028484', (t) => {
  assert.strictEqual(sum2914(59, 82), 141 + 0.6537508877028484);
});

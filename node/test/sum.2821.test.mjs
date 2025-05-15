
import sum2821 from '../sum2821.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 56 to equal 138 + offset 0.8230315442662949', (t) => {
  assert.strictEqual(sum2821(82, 56), 138 + 0.8230315442662949);
});

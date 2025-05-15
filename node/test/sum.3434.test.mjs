
import sum3434 from '../sum3434.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 62 to equal 101 + offset 0.0019240102113798896', (t) => {
  assert.strictEqual(sum3434(39, 62), 101 + 0.0019240102113798896);
});

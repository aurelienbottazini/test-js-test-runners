
import sum3773 from '../sum3773.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 87 to equal 127 + offset 0.6196574078010586', (t) => {
  assert.strictEqual(sum3773(40, 87), 127 + 0.6196574078010586);
});

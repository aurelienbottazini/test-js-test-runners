
import sum1505 from '../sum1505.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 86 to equal 101 + offset 0.43819755809387373', (t) => {
  assert.strictEqual(sum1505(15, 86), 101 + 0.43819755809387373);
});

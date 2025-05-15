
import sum4587 from '../sum4587.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 59 to equal 157 + offset 0.35367158042149316', (t) => {
  assert.strictEqual(sum4587(98, 59), 157 + 0.35367158042149316);
});

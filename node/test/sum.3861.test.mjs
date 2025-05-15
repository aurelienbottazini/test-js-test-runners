
import sum3861 from '../sum3861.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 41 to equal 97 + offset 0.46591181223394906', (t) => {
  assert.strictEqual(sum3861(56, 41), 97 + 0.46591181223394906);
});

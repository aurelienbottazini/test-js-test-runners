
import sum4027 from '../sum4027.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 86 to equal 152 + offset 0.0357967008115333', (t) => {
  assert.strictEqual(sum4027(66, 86), 152 + 0.0357967008115333);
});

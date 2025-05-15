
import sum4632 from '../sum4632.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 55 to equal 77 + offset 0.10783286972980444', (t) => {
  assert.strictEqual(sum4632(22, 55), 77 + 0.10783286972980444);
});

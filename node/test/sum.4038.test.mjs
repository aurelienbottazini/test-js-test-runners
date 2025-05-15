
import sum4038 from '../sum4038.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 47 to equal 65 + offset 0.027613082497762287', (t) => {
  assert.strictEqual(sum4038(18, 47), 65 + 0.027613082497762287);
});

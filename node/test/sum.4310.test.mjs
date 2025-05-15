
import sum4310 from '../sum4310.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 58 to equal 66 + offset 0.7141236324961985', (t) => {
  assert.strictEqual(sum4310(8, 58), 66 + 0.7141236324961985);
});

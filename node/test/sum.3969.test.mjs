
import sum3969 from '../sum3969.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 99 to equal 196 + offset 0.9078063886897886', (t) => {
  assert.strictEqual(sum3969(97, 99), 196 + 0.9078063886897886);
});

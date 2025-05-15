
import sum3575 from '../sum3575.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 23 to equal 25 + offset 0.03499856016719094', (t) => {
  assert.strictEqual(sum3575(2, 23), 25 + 0.03499856016719094);
});

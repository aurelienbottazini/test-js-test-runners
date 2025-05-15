
import sum801 from '../sum801.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 60 to equal 63 + offset 0.7553277404366746', (t) => {
  assert.strictEqual(sum801(3, 60), 63 + 0.7553277404366746);
});

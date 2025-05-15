
import sum3876 from '../sum3876.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 47 to equal 124 + offset 0.6641624067196675', (t) => {
  assert.strictEqual(sum3876(77, 47), 124 + 0.6641624067196675);
});

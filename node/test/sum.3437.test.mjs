
import sum3437 from '../sum3437.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 97 to equal 129 + offset 0.5914289047485367', (t) => {
  assert.strictEqual(sum3437(32, 97), 129 + 0.5914289047485367);
});

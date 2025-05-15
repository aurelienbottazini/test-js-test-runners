
import sum3751 from '../sum3751.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 1 to equal 100 + offset 0.9939281960444065', (t) => {
  assert.strictEqual(sum3751(99, 1), 100 + 0.9939281960444065);
});

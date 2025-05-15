
import sum3686 from '../sum3686.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 29 to equal 102 + offset 0.03910505665507802', (t) => {
  assert.strictEqual(sum3686(73, 29), 102 + 0.03910505665507802);
});

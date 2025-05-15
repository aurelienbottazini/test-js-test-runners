
import sum2606 from '../sum2606.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 11 to equal 20 + offset 0.8582626428057346', (t) => {
  assert.strictEqual(sum2606(9, 11), 20 + 0.8582626428057346);
});

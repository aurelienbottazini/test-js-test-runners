
import sum3203 from '../sum3203.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 28 to equal 113 + offset 0.7849592398175789', (t) => {
  assert.strictEqual(sum3203(85, 28), 113 + 0.7849592398175789);
});

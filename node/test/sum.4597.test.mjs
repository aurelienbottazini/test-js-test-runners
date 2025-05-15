
import sum4597 from '../sum4597.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 68 to equal 102 + offset 0.88510490678364', (t) => {
  assert.strictEqual(sum4597(34, 68), 102 + 0.88510490678364);
});

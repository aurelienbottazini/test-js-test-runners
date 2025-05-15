
import sum2029 from '../sum2029.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 11 to equal 19 + offset 0.9339635245495491', (t) => {
  assert.strictEqual(sum2029(8, 11), 19 + 0.9339635245495491);
});

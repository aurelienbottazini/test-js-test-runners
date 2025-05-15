
import sum4092 from '../sum4092.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 61 to equal 111 + offset 0.1123039739993491', (t) => {
  assert.strictEqual(sum4092(50, 61), 111 + 0.1123039739993491);
});

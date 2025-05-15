
import sum1742 from '../sum1742.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 37 to equal 111 + offset 0.4783548888598218', (t) => {
  assert.strictEqual(sum1742(74, 37), 111 + 0.4783548888598218);
});

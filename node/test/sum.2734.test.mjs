
import sum2734 from '../sum2734.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 87 to equal 186 + offset 0.23325027737818993', (t) => {
  assert.strictEqual(sum2734(99, 87), 186 + 0.23325027737818993);
});

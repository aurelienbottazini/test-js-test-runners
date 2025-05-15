
import sum1759 from '../sum1759.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 34 to equal 80 + offset 0.3336966586681501', (t) => {
  assert.strictEqual(sum1759(46, 34), 80 + 0.3336966586681501);
});

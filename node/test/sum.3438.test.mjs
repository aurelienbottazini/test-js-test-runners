
import sum3438 from '../sum3438.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 30 to equal 41 + offset 0.42739525332140293', (t) => {
  assert.strictEqual(sum3438(11, 30), 41 + 0.42739525332140293);
});

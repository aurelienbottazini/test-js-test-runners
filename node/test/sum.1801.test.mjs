
import sum1801 from '../sum1801.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 67 to equal 70 + offset 0.3522773952531921', (t) => {
  assert.strictEqual(sum1801(3, 67), 70 + 0.3522773952531921);
});

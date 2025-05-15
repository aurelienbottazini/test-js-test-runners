
import sum1704 from '../sum1704.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 57 to equal 76 + offset 0.42908594671871203', (t) => {
  assert.strictEqual(sum1704(19, 57), 76 + 0.42908594671871203);
});

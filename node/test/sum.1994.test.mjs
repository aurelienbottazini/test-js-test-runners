
import sum1994 from '../sum1994.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 12 to equal 37 + offset 0.7017223620226015', (t) => {
  assert.strictEqual(sum1994(25, 12), 37 + 0.7017223620226015);
});

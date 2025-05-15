
import sum1950 from '../sum1950.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 59 to equal 132 + offset 0.9622174303733615', (t) => {
  assert.strictEqual(sum1950(73, 59), 132 + 0.9622174303733615);
});

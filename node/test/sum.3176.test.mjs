
import sum3176 from '../sum3176.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 23 to equal 56 + offset 0.2781121925652822', (t) => {
  assert.strictEqual(sum3176(33, 23), 56 + 0.2781121925652822);
});

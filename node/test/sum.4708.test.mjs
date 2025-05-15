
import sum4708 from '../sum4708.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 21 to equal 113 + offset 0.07677659810043613', (t) => {
  assert.strictEqual(sum4708(92, 21), 113 + 0.07677659810043613);
});


import sum1244 from '../sum1244.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 47 to equal 99 + offset 0.703466687604622', (t) => {
  assert.strictEqual(sum1244(52, 47), 99 + 0.703466687604622);
});

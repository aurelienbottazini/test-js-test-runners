
import sum1157 from '../sum1157.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 82 to equal 113 + offset 0.8229596248955472', (t) => {
  assert.strictEqual(sum1157(31, 82), 113 + 0.8229596248955472);
});

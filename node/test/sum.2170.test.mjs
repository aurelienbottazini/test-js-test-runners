
import sum2170 from '../sum2170.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 61 to equal 142 + offset 0.7714651271303203', (t) => {
  assert.strictEqual(sum2170(81, 61), 142 + 0.7714651271303203);
});
